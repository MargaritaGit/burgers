import { IfStmt } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currency = '$';

  form = this.fb.group({
    order: ['', Validators.required],
    name: ['', Validators.required],
    phone: ['', Validators.required],
  });

  // productsData = [
  //   {
  //     image: "1.png",
  //     title: 'Бургер чеддер & бекон',
  //     text: 'Котлета из говядины криспи, булочка, томат, сыр Чеддер, грудинка, лук красный, салат айсбер, майонез, кетчуп, сырный соус',
  //     price: 8,
  //     basePrice: 8,
  //     grams: 360,
  //   },
  //   {
  //     image: "2.png",
  //     title: 'BBQ с беконом и курицей',
  //     text: 'Булочка бриошь с кунжутом, куриная котлета, сыр чеддер, томат, огурец маринованный, лук маринованный, салат Ромен, бекон, соус BBQ',
  //     price: 7,
  //     basePrice: 7,
  //     grams: 390,
  //   },
  //   {
  //     image: "3.png",
  //     title: 'Дабл биф бургер',
  //     text: 'Две говяжьи котлеты, сыр чеддер, салат романо, маринованные огурцы,свежий томат, бекон, красный лук, соус бургер, горчица',
  //     price: 10,
  //     basePrice: 10,
  //     grams: 420,
  //   },
  //   {
  //     image: "4.png",
  //     title: 'Баварский бургер',
  //     text: 'Булочка для бургера, говяжья котлета, красный лук, сыр, охотничья колбаска, соус барбекю, соус сырный, салат айсберг',
  //     price: 7,
  //     basePrice: 7,
  //     grams: 220,
  //   },
  //   {
  //     image: "5.png",
  //     title: 'Бекон чизбургер',
  //     text: 'Булочка для бургера, говяжья котлета, грудинка, помидор, огурец маринованный, сыр, сырный соус, кетчуп, зелень',
  //     price: 8,
  //     basePrice: 8,
  //     grams: 220,
  //   },
  //   {
  //     image: "6.png",
  //     title: 'Индиана бургер',
  //     text: 'Булочка для бургера, котлета куриная, грудинка, яйцо, огурец маринованный, криспи лук, кетчуп, соус сырный, горчица, зелень',
  //     price: 9,
  //     basePrice: 9,
  //     grams: 320,
  //   },
  //   {
  //     image: "7.png",
  //     title: 'Вегги бургер',
  //     text: 'Булочка для бургера, вегетарианская котлета, красный лук, сыр, свежий томат, соус барбекю, соус сырный, салат айсберг',
  //     price: 8,
  //     basePrice: 8,
  //     grams: 280,
  //   },
  //   {
  //     image: "8.png",
  //     title: 'Плаксивый Джо',
  //     text: 'Булочка для бургера, говяжья котлета, грудинка, помидор, огурец маринованный, красный лук, сыр, перец халапеньо, кетчуп, зелень',
  //     price: 7,
  //     basePrice: 7,
  //     grams: 380,
  //   },
  //   {
  //     image: "9.png",
  //     title: 'Двойной чиз бургер',
  //     text: 'Булочка для бургера, две говяжьи котлеты, двойной сыр чеддар, огурец маринованный, криспи лук, кетчуп, соус сырный, горчица, зелень',
  //     price: 11,
  //     basePrice: 11,
  //     grams: 400,
  //   },
  //   {
  //     image: "10.png",
  //     title: 'Фрешбургер',
  //     text: 'Булочка для бургера, говяжья котлета, бекон, сыр чеддар, яйцо, салями, соус барбекю, соус сырный, салат айсберг, свежий томат',
  //     price: 9,
  //     basePrice: 9,
  //     grams: 300,
  //   },
  //   {
  //     image: "11.png",
  //     title: 'Цуккини бургер',
  //     text: 'Булочка для бургера, вегетарианская котлета из нута, цуккини на гриле, помидор, огурец маринованный, сыр, горчичный соус, кетчуп, зелень',
  //     price: 8,
  //     basePrice: 8,
  //     grams: 320,
  //   },
  //   {
  //     image: "12.png",
  //     title: 'Двойной бургер чеддар',
  //     text: 'Булочка для бургера, котлета говяжья, грудинка, красный лук, огурец маринованный, томат, кетчуп, двойной сыр чеддар, горчица, зелень',
  //     price: 9,
  //     basePrice: 9,
  //     grams: 360,
  //   },
  //   // {
  //   //   image: "12.png",
  //   //   title: 'Бургер чеддер & бекон',
  //   //   text: 'Котлета из говядины криспи, булочка, томат, сыр Чеддер, грудинка, лук красный, салат айсбер, майонез, кетчуп, сырный соус',
  //   //   price: 19,
  //   //   basePrice: 19,
  //   //   grams: 960,
  //   // },
  // ];

  productsData: any;


  constructor(private fb: FormBuilder, private appService: AppService) {

  }

  //  после загрузки страницы
  ngOnInit() {
    this.appService.getBurgersData()
      .subscribe(data => {
        // присваиваем полученные данные от бекенда - массив объектов - переменной productsData
        this.productsData = data
      })
  }

  scrollTo(target: HTMLElement, product: any = null) {
    target.scrollIntoView({ behavior: 'smooth' });

    if (product) {
      this.form.patchValue({
        // order: product.title + ' (' + product.price.toFixed(2) + ' ' + this.currency + ')',
        order: `${product.title} (${product.price.toFixed(2)} ${this.currency})`,
      });
    }
  }

  confirmOrder(event: any) {
    // отменяем действие формы по умолчанию - перезагрузку страницы
    event.preventDefault();
    console.log(event);

    // if (this.form.valid) {
    console.log(this.form.value);

    this.appService.sendOrder(this.form.value)
      .subscribe(
        {
          //метод в котором обрабатываем успешный результат
          next: (response: any) => {
            alert(response.message);
            console.log(response.message);

            this.form.reset();
          },

          error: (response) => {
            alert(response.error.message);
            console.error(response.error.message);
          },
        }
      );

    // alert('Спасибо за заказ! Мы скоро свяжемся с вами!');
    // this.form.reset();
    // }
  }

  changeCurrency() {
    let newCurrency = '$';
    let coefficient = 1;

    if (this.currency === '$') {
      newCurrency = '₽';
      coefficient = 100.33;
    } else if (this.currency === '₽') {
      newCurrency = 'BYN';
      coefficient = 3;
    } else if (this.currency === 'BYN') {
      newCurrency = '€';
      coefficient = 0.9;
    } else if (this.currency === '€') {
      newCurrency = '¥';
      coefficient = 6.9;
    }

    this.currency = newCurrency;

    this.productsData.forEach((product: any) => {
      product.price = product.basePrice * coefficient;
      console.log(product.price);
    })
  }
}


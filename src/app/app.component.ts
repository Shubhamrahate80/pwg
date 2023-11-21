import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  passLength: number = 0;

  //validChar:string='';

  generatePass: string = ''

  includeNum: boolean = false

  includeCh: boolean = false

  includeSys: boolean = false

  getLength(length: string) {

    console.log(length);

    this.passLength = +length

  }

  includeNumber() {

    this.includeNum = !this.includeNum

  }

  includeChar() {

    this.includeCh = !this.includeCh

  }

  includeSymbol() {

    this.includeSys = !this.includeSys

  }

  genPass() {

    this.generatePass = ''

    let validChar = '';

    if (this.includeNum) {

      validChar += '1234567890'

    }

    if (this.includeCh) {

      validChar += 'qwertyuiopkjhgfdszxcvbnm'

    }

    if (this.includeSys) {

      validChar += '!@#$)(*&^%$'

    }

    console.log(validChar);

    for (var s = 0; s < this.passLength; s++) {

      this.generatePass = this.generatePass + validChar.charAt(Math.round(Math.random() * validChar.length));

    }

  }



}

import { HttpClient } from '@angular/common/http';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { from, Observable, Subject } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-data-shairing',
  templateUrl: './data-shairing.component.html',
  styleUrls: ['./data-shairing.component.css'],
})
export class DataShairingComponent implements OnInit, AfterViewInit {
  dataToChild: string = '';
  // @ViewChild(DataDetailComponent) public dataDetailComp!: DataDetailComponent;
  // @ViewChild("childComp") child !: DataDetailComponent;
  // urlfromG:string = "Git hub";
  // urlfromD:string = "Dot net";


  constructor(public cd: ChangeDetectorRef, private http: HttpClient) {}
  ngAfterViewInit(): void {
    // this.dataDetailComp.msgFromParent = 'parent updated data of child';
    // this.dataDetailComp.updateMsgFromParent("new msg from parent");
    this.cd.detectChanges();
  }

  ngOnInit(): void {
    //  const promise = new Promise(resolve =>{
    //   const dataa = this.http.get("https://jsonplaceholder.typicode.com/users");
    //   console.log('pppp',dataa);
    //   resolve("pppp");
    //   // setTimeout(() => {
    //   //   resolve("pppp ayyyyyyyy");
    //   //   // subscriber.complete();
    //   // }, 1000);

    //  })
    //  promise.then(resp =>{
    //   console.log('ppppppp',resp);
    //  })
    // //  from(promise).next()
    //  const obs = new Observable();

    //  const data =  ajax('https://jsonplaceholder.typicode.com/users');
    //  console.log('pppppppp after then');

    //  obv = new Observable((sub) => {
    //   console.log('000 obv callback running');
    //   sub.next(1);
    //   console.log('000 dekhe jara');

    //   sub.next(2);
    // });
    // this.obv.subscribe((res) => {
    //   console.log('000 first subs', res);
    // });
    // this.obv.subscribe((res) => {
    //   console.log('000 second subs', res);
    // });

    // const sub = new Subject();
    // sub.subscribe((res) => {
    //   console.log('subs1', res);
    // });
    // sub.subscribe((res) => {
    //   console.log('subs2', res);
    // });
    // sub.next(89);

    // let gitRes = fetch("https://github.com/angular/angular/issues/24962");
    // gitRes.then((res)=>{
    //   console.log('github res',gitRes);
    //   console.log('github real res',res);

    //   this.urlfromG = res.url;
      
    // })
    // gitRes = fetch("https://www.dotnettricks.com/learn/angular/sharing-data-between-angular-components-methods");
    // console.log('new git ress',gitRes);
    // gitRes.then((res)=>{
    //   console.log('dotnet resss',gitRes);
    //   console.log('dotnet real resss',res);

    //   this.urlfromD = res.url;
      
    // })
    
  }

  // createobv(){
  //   this.obv = new Observable((sub) => {
  //     console.log('000 fn obv callback running');
  //     sub.next(8);
  //     console.log('000 fn dekhe jara');

  //     sub.next(9);
  //   });

  // }

  // clearOrSetForm($event: clearParentEventArgs) {
  //   if ($event.reset) {
  //     this.dataToChild = '';
  //   } else {
  //     this.dataToChild = $event.value;
  //   }
  // }
  // increase() {
  //   this.dataDetailComp.addCounter();
  // }
  // decrease() {
  //   this.dataDetailComp.subCounter();
  // }
}

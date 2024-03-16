import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import * as moment from 'moment';
import { EmpDetails } from 'src/app/shared/interfaces';
import { DataServiceService } from 'src/app/shared/service/data-service.service';
import Swal from 'sweetalert2';
import { EmpSearchComponent } from './emp-search/emp-search.component';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
})
export class EmployeeDetailsComponent implements OnInit {
  passDetails: any = [];
  loader: boolean = true;
  itemsPerPageList: any = '12';
  page: number = 1;
  nodataFound: boolean = false;
  passDetailsReal: any = [];
  details = {
    "totalPassengers": 43,
    "totalPages": 2,
    "data": [{
      "_id": "63bebf980f2fe85057c9ff9e",
      "name": "Sheriff",
      "trips": 2,
      "airline": [{
        "id": 1,
        "name": "Quatar Airways",
        "country": "Quatar",
        "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/300px-Qatar_Airways_Logo.svg.png",
        "slogan": "Going Places Together",
        "head_quaters": "Qatar Airways Towers, Doha, Qatar",
        "website": "www.qatarairways.com",
        "established": "1994"
      }],
      "__v": 0
    }, {
      "_id": "63befa8a0f2fe87452ca01a1",
      "name": "John Doe",
      "trips": 250,
      "airline": [{
        "id": 5,
        "name": "Eva Air",
        "country": "Taiwan",
        "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/EVA_Air_logo.svg/250px-EVA_Air_logo.svg.png",
        "slogan": "Sharing the World, Flying Together",
        "head_quaters": "376, Hsin-Nan Rd., Sec. 1, Luzhu, Taoyuan City, Taiwan",
        "website": "www.evaair.com",
        "established": "1989"
      }],
      "__v": 0
    }, {
      "_id": "63befa8b0f2fe82b23ca01a4",
      "name": "John Doe",
      "trips": 250,
      "airline": [{
        "id": 5,
        "name": "Eva Air",
        "country": "Taiwan",
        "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/EVA_Air_logo.svg/250px-EVA_Air_logo.svg.png",
        "slogan": "Sharing the World, Flying Together",
        "head_quaters": "376, Hsin-Nan Rd., Sec. 1, Luzhu, Taoyuan City, Taiwan",
        "website": "www.evaair.com",
        "established": "1989"
      }],
      "__v": 0
    }, {
      "_id": "63befa8c0f2fe8345dca01a7",
      "name": "John Doe",
      "trips": 250,
      "airline": [{
        "id": 5,
        "name": "Eva Air",
        "country": "Taiwan",
        "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/EVA_Air_logo.svg/250px-EVA_Air_logo.svg.png",
        "slogan": "Sharing the World, Flying Together",
        "head_quaters": "376, Hsin-Nan Rd., Sec. 1, Luzhu, Taoyuan City, Taiwan",
        "website": "www.evaair.com",
        "established": "1989"
      }],
      "__v": 0
    }, {
      "_id": "63befa8c0f2fe885d9ca01aa",
      "name": "John Doe",
      "trips": 250,
      "airline": [{
        "id": 5,
        "name": "Eva Air",
        "country": "Taiwan",
        "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/EVA_Air_logo.svg/250px-EVA_Air_logo.svg.png",
        "slogan": "Sharing the World, Flying Together",
        "head_quaters": "376, Hsin-Nan Rd., Sec. 1, Luzhu, Taoyuan City, Taiwan",
        "website": "www.evaair.com",
        "established": "1989"
      }],
      "__v": 0
    }, {
      "_id": "63befa8c0f2fe80254ca01ad",
      "name": "John Doe",
      "trips": 250,
      "airline": [{
        "id": 5,
        "name": "Eva Air",
        "country": "Taiwan",
        "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/EVA_Air_logo.svg/250px-EVA_Air_logo.svg.png",
        "slogan": "Sharing the World, Flying Together",
        "head_quaters": "376, Hsin-Nan Rd., Sec. 1, Luzhu, Taoyuan City, Taiwan",
        "website": "www.evaair.com",
        "established": "1989"
      }],
      "__v": 0
    }, {
      "_id": "63befa8c0f2fe872b0ca01b0",
      "name": "John Doe",
      "trips": 250,
      "airline": [{
        "id": 5,
        "name": "Eva Air",
        "country": "Taiwan",
        "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/EVA_Air_logo.svg/250px-EVA_Air_logo.svg.png",
        "slogan": "Sharing the World, Flying Together",
        "head_quaters": "376, Hsin-Nan Rd., Sec. 1, Luzhu, Taoyuan City, Taiwan",
        "website": "www.evaair.com",
        "established": "1989"
      }],
      "__v": 0
    }, {
      "_id": "63befa8c0f2fe8778cca01b3",
      "name": "John Doe",
      "trips": 250,
      "airline": [{
        "id": 5,
        "name": "Eva Air",
        "country": "Taiwan",
        "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/EVA_Air_logo.svg/250px-EVA_Air_logo.svg.png",
        "slogan": "Sharing the World, Flying Together",
        "head_quaters": "376, Hsin-Nan Rd., Sec. 1, Luzhu, Taoyuan City, Taiwan",
        "website": "www.evaair.com",
        "established": "1989"
      }],
      "__v": 0
    }, {
      "_id": "63befa8d0f2fe866dcca01b6",
      "name": "John Doe",
      "trips": 250,
      "airline": [{
        "id": 5,
        "name": "Eva Air",
        "country": "Taiwan",
        "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/EVA_Air_logo.svg/250px-EVA_Air_logo.svg.png",
        "slogan": "Sharing the World, Flying Together",
        "head_quaters": "376, Hsin-Nan Rd., Sec. 1, Luzhu, Taoyuan City, Taiwan",
        "website": "www.evaair.com",
        "established": "1989"
      }],
      "__v": 0
    }, {
      "_id": "63befa8d0f2fe8b1b5ca01b9",
      "name": "John Doe",
      "trips": 250,
      "airline": [{
        "id": 5,
        "name": "Eva Air",
        "country": "Taiwan",
        "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/EVA_Air_logo.svg/250px-EVA_Air_logo.svg.png",
        "slogan": "Sharing the World, Flying Together",
        "head_quaters": "376, Hsin-Nan Rd., Sec. 1, Luzhu, Taoyuan City, Taiwan",
        "website": "www.evaair.com",
        "established": "1989"
      }],
      "__v": 0
    }, {
      "_id": "63befa8d0f2fe82202ca01bc",
      "name": "John Doe",
      "trips": 250,
      "airline": [{
        "id": 5,
        "name": "Eva Air",
        "country": "Taiwan",
        "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/EVA_Air_logo.svg/250px-EVA_Air_logo.svg.png",
        "slogan": "Sharing the World, Flying Together",
        "head_quaters": "376, Hsin-Nan Rd., Sec. 1, Luzhu, Taoyuan City, Taiwan",
        "website": "www.evaair.com",
        "established": "1989"
      }],
      "__v": 0
    }, {
      "_id": "63befa8d0f2fe8e80aca01bf",
      "name": "John Doe",
      "trips": 250,
      "airline": [{
        "id": 5,
        "name": "Eva Air",
        "country": "Taiwan",
        "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/EVA_Air_logo.svg/250px-EVA_Air_logo.svg.png",
        "slogan": "Sharing the World, Flying Together",
        "head_quaters": "376, Hsin-Nan Rd., Sec. 1, Luzhu, Taoyuan City, Taiwan",
        "website": "www.evaair.com",
        "established": "1989"
      }],
      "__v": 0
    }, {
      "_id": "63befa8d0f2fe8f417ca01c2",
      "name": "John Doe",
      "trips": 250,
      "airline": [{
        "id": 5,
        "name": "Eva Air",
        "country": "Taiwan",
        "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/EVA_Air_logo.svg/250px-EVA_Air_logo.svg.png",
        "slogan": "Sharing the World, Flying Together",
        "head_quaters": "376, Hsin-Nan Rd., Sec. 1, Luzhu, Taoyuan City, Taiwan",
        "website": "www.evaair.com",
        "established": "1989"
      }],
      "__v": 0
    }, {
      "_id": "63befa8d0f2fe8ff3aca01c5",
      "name": "John Doe",
      "trips": 250,
      "airline": [{
        "id": 5,
        "name": "Eva Air",
        "country": "Taiwan",
        "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/EVA_Air_logo.svg/250px-EVA_Air_logo.svg.png",
        "slogan": "Sharing the World, Flying Together",
        "head_quaters": "376, Hsin-Nan Rd., Sec. 1, Luzhu, Taoyuan City, Taiwan",
        "website": "www.evaair.com",
        "established": "1989"
      }],
      "__v": 0
    }, {
      "_id": "63befa8d0f2fe80b80ca01c8",
      "name": "John Doe",
      "trips": 250,
      "airline": [{
        "id": 5,
        "name": "Eva Air",
        "country": "Taiwan",
        "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/EVA_Air_logo.svg/250px-EVA_Air_logo.svg.png",
        "slogan": "Sharing the World, Flying Together",
        "head_quaters": "376, Hsin-Nan Rd., Sec. 1, Luzhu, Taoyuan City, Taiwan",
        "website": "www.evaair.com",
        "established": "1989"
      }],
      "__v": 0
    }, {
      "_id": "63befa980f2fe8785dca01cb",
      "name": "Teste",
      "trips": 8571,
      "airline": [{
        "id": 5,
        "name": "Eva Air",
        "country": "Taiwan",
        "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/EVA_Air_logo.svg/250px-EVA_Air_logo.svg.png",
        "slogan": "Sharing the World, Flying Together",
        "head_quaters": "376, Hsin-Nan Rd., Sec. 1, Luzhu, Taoyuan City, Taiwan",
        "website": "www.evaair.com",
        "established": "1989"
      }],
      "__v": 0
    }, {
      "_id": "63befa9a0f2fe8752cca01ce",
      "name": "Teste",
      "trips": 8571,
      "airline": [{
        "id": 2,
        "name": "Singapore Airlines",
        "country": "Singapore",
        "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Singapore_Airlines_Logo_2.svg/250px-Singapore_Airlines_Logo_2.svg.png",
        "slogan": "A Great Way to Fly",
        "head_quaters": "Airline House, 25 Airline Road, Singapore 819829",
        "website": "www.singaporeair.com",
        "established": "1947"
      }],
      "__v": 0
    }, {
      "_id": "63befa9e0f2fe80ce2ca01d1",
      "name": "Teste",
      "trips": 8571,
      "airline": [{
        "id": 1,
        "name": "Quatar Airways",
        "country": "Quatar",
        "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/300px-Qatar_Airways_Logo.svg.png",
        "slogan": "Going Places Together",
        "head_quaters": "Qatar Airways Towers, Doha, Qatar",
        "website": "www.qatarairways.com",
        "established": "1994"
      }],
      "__v": 0
    }, {
      "_id": "63befaa50f2fe81706ca01d6",
      "name": "Teste",
      "trips": 8571,
      "airline": [{
        "id": 1,
        "name": "Quatar Airways",
        "country": "Quatar",
        "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/300px-Qatar_Airways_Logo.svg.png",
        "slogan": "Going Places Together",
        "head_quaters": "Qatar Airways Towers, Doha, Qatar",
        "website": "www.qatarairways.com",
        "established": "1994"
      }],
      "__v": 0
    }, {
      "_id": "63befaa50f2fe8c428ca01d9",
      "name": "Teste",
      "trips": 8571,
      "airline": [{
        "id": 1,
        "name": "Quatar Airways",
        "country": "Quatar",
        "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/300px-Qatar_Airways_Logo.svg.png",
        "slogan": "Going Places Together",
        "head_quaters": "Qatar Airways Towers, Doha, Qatar",
        "website": "www.qatarairways.com",
        "established": "1994"
      }],
      "__v": 0
    }, {
      "_id": "63befaa50f2fe8b67eca01dc",
      "name": "Teste",
      "trips": 8571,
      "airline": [{
        "id": 1,
        "name": "Quatar Airways",
        "country": "Quatar",
        "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/300px-Qatar_Airways_Logo.svg.png",
        "slogan": "Going Places Together",
        "head_quaters": "Qatar Airways Towers, Doha, Qatar",
        "website": "www.qatarairways.com",
        "established": "1994"
      }],
      "__v": 0
    }, {
      "_id": "63befaa50f2fe881dcca01df",
      "name": "Teste",
      "trips": 8571,
      "airline": [{
        "id": 1,
        "name": "Quatar Airways",
        "country": "Quatar",
        "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/300px-Qatar_Airways_Logo.svg.png",
        "slogan": "Going Places Together",
        "head_quaters": "Qatar Airways Towers, Doha, Qatar",
        "website": "www.qatarairways.com",
        "established": "1994"
      }],
      "__v": 0
    }, {
      "_id": "63befaa60f2fe8afcdca01e2",
      "name": "Teste",
      "trips": 8571,
      "airline": [{
        "id": 1,
        "name": "Quatar Airways",
        "country": "Quatar",
        "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/300px-Qatar_Airways_Logo.svg.png",
        "slogan": "Going Places Together",
        "head_quaters": "Qatar Airways Towers, Doha, Qatar",
        "website": "www.qatarairways.com",
        "established": "1994"
      }],
      "__v": 0
    }, {
      "_id": "63befaa60f2fe8a95cca01e5",
      "name": "Teste",
      "trips": 8571,
      "airline": [{
        "id": 1,
        "name": "Quatar Airways",
        "country": "Quatar",
        "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/300px-Qatar_Airways_Logo.svg.png",
        "slogan": "Going Places Together",
        "head_quaters": "Qatar Airways Towers, Doha, Qatar",
        "website": "www.qatarairways.com",
        "established": "1994"
      }],
      "__v": 0
    }, {
      "_id": "63befaa60f2fe8ff60ca01e8",
      "name": "Teste",
      "trips": 8571,
      "airline": [{
        "id": 1,
        "name": "Quatar Airways",
        "country": "Quatar",
        "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/300px-Qatar_Airways_Logo.svg.png",
        "slogan": "Going Places Together",
        "head_quaters": "Qatar Airways Towers, Doha, Qatar",
        "website": "www.qatarairways.com",
        "established": "1994"
      }],
      "__v": 0
    }, {
      "_id": "63befaa60f2fe84fa0ca01eb",
      "name": "Teste",
      "trips": 8571,
      "airline": [{
        "id": 1,
        "name": "Quatar Airways",
        "country": "Quatar",
        "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/300px-Qatar_Airways_Logo.svg.png",
        "slogan": "Going Places Together",
        "head_quaters": "Qatar Airways Towers, Doha, Qatar",
        "website": "www.qatarairways.com",
        "established": "1994"
      }],
      "__v": 0
    }, {
      "_id": "63befaa60f2fe8a92fca01ee",
      "name": "Teste",
      "trips": 8571,
      "airline": [{
        "id": 1,
        "name": "Quatar Airways",
        "country": "Quatar",
        "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/300px-Qatar_Airways_Logo.svg.png",
        "slogan": "Going Places Together",
        "head_quaters": "Qatar Airways Towers, Doha, Qatar",
        "website": "www.qatarairways.com",
        "established": "1994"
      }],
      "__v": 0
    }, {
      "_id": "63befaa70f2fe85abfca01f1",
      "name": "Teste",
      "trips": 8571,
      "airline": [{
        "id": 1,
        "name": "Quatar Airways",
        "country": "Quatar",
        "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/300px-Qatar_Airways_Logo.svg.png",
        "slogan": "Going Places Together",
        "head_quaters": "Qatar Airways Towers, Doha, Qatar",
        "website": "www.qatarairways.com",
        "established": "1994"
      }],
      "__v": 0
    }, {
      "_id": "63befaa70f2fe87f78ca01f4",
      "name": "Teste",
      "trips": 8571,
      "airline": [{
        "id": 1,
        "name": "Quatar Airways",
        "country": "Quatar",
        "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/300px-Qatar_Airways_Logo.svg.png",
        "slogan": "Going Places Together",
        "head_quaters": "Qatar Airways Towers, Doha, Qatar",
        "website": "www.qatarairways.com",
        "established": "1994"
      }],
      "__v": 0
    }, {
      "_id": "63befaa70f2fe8222cca01f7",
      "name": "Teste",
      "trips": 8571,
      "airline": [{
        "id": 1,
        "name": "Quatar Airways",
        "country": "Quatar",
        "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/300px-Qatar_Airways_Logo.svg.png",
        "slogan": "Going Places Together",
        "head_quaters": "Qatar Airways Towers, Doha, Qatar",
        "website": "www.qatarairways.com",
        "established": "1994"
      }],
      "__v": 0
    }]
  }

  @ViewChild(EmpSearchComponent) public empSearchComp!: EmpSearchComponent;
  searchText: string = '';
  // searchTextName!: string;
  // searchTextMobile!: string;
  constructor(private service: DataServiceService) {}
  // contactNo: number = 2222;

  ngOnInit(): void {
    this.getEmpDetails();

    // console.log('emmmm', this.contactNo);
    // this.service.contactNumberSubject.subscribe((res) => {
    //   console.log('emmp det', res);
    //   this.contactNo = res;
    //   // return res;
    // });
  }

  async getEmpDetails() {
    let pageNo = this.page;
    let data = [];
    this.loader = true;
    this.nodataFound = false;
    await this.service
      .getEmployeeDetials(pageNo, this.itemsPerPageList)
      .subscribe((res) => {
        this.passDetails = res;
        this.passDetailsReal = { ...this.passDetails };
        console.log('res', this.passDetails);
        this.loader = false;
      }, (err) => {
        this.passDetails = this.details;
        this.passDetailsReal = { ...this.passDetails };
        this.loader = false;
      }
    );
  }


  onTableDataChange(event: any) {
    this.page = event;
    this.getEmpDetails();
  }

  searchEmp(event: string) {
    this.searchText = this.empSearchComp.searchText; // we can access searchText via event also
    // this.empDetails = this.empDetailsReal.filter((ele: EmpDetails) => {
    //   return event === '' ||
    //   ele.name?.toLowerCase().match(event.toLowerCase())
    // });
  }
  filterEmp(event: FormGroup) {
    this.nodataFound = false;
    this.passDetails = { ...this.passDetailsReal };
    const name = event.value.name.toLowerCase();
    const startYear = event.value.startYear;
    const endYear = event.value.endYear;
    const tripRange = event.value.tripRange;
    console.log(this.passDetails);
    if (name) {
      this.passDetails.data = this.passDetails.data.filter((ele: any) => {
        return ele.airline[0].name.toLowerCase().includes(name);
      });
    }
    if (startYear) {
      this.passDetails.data = this.passDetails.data.filter((ele: any) => {
        return ele.airline[0].established >= startYear;
      });
    }
    if (endYear) {
      this.passDetails.data = this.passDetails.data.filter((ele: any) => {
        return ele.airline[0].established <= endYear;
      });
    }
    if (tripRange) {
      this.passDetails.data = this.passDetails.data.filter((ele: any) => {
        if (tripRange == 100) {
          return ele.trips <= tripRange;
        } else if (tripRange == 500) {
          return ele.trips <= tripRange && ele.trips > 100;
        } else {
          return ele.trips > 500;
        }
      });
    }
    if(this.passDetails.data.length === 0) {
      this.nodataFound = true;
    }
    console.log('SSAA', this.passDetails);
  }
}

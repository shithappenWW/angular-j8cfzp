import { Injectable } from '@angular/core';
// import { EmployeeComponent } from './employee/employee.component';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  employees: Employee[] = [
    {
      id: 101,
      firstName: 'Freddie',
      lastName: 'Baker',
      email: 'fbaker@gmail.com',
    },
    {
      id: 102,
      firstName: 'Donna',
      lastName: 'Johnny',
      email: 'dautumn@yahoo.com',
    },
    {
      id: 103,
      firstName: 'Johnny',
      lastName: 'Bravo',
      email: 'jbravo@gmail.com',
    },
    {
      id: 104,
      firstName: 'Dave',
      lastName: 'Martinez',
      email: 'martinezdaveadrian@gmail.com',
    },
  ];
  products: Product[] = [
    {
      prod_id: 'P-101',
      prod_name: 'Logitech Mouse',
      prod_desc: '4 Button Mechanical Mouse G103',
      prod_price: 599.0,
    },
    {
      prod_id: 'P-102',
      prod_name: 'Razer speaker',
      prod_desc: 'Waterproof Radio 360',
      prod_price: 2099.0,
    },
    {
      prod_id: 'P-103',
      prod_name: 'Mechanical Keyboard',
      prod_desc: 'RGB keyboard',
      prod_price: 2199.0,
    },
    {
      prod_id: 'P-104',
      prod_name: 'Oculus Meta',
      prod_desc: 'All-in-One Gaming Headset',
      prod_price: 22450.0,
    },
  ];
  constructor() {}
}
export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

export interface Product {
  prod_id: string;
  prod_name: string;
  prod_desc: string;
  prod_price: number;
}

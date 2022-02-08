import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../customer.service";
import {Customer} from "../model";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customer: Customer;

  //intentional error at model to screw up json
  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    console.info('>>> Customer Portion')
    this.customerService.getCustomerAsPromise()
      .then(result => {
        this.customer = result
      })
  }

}

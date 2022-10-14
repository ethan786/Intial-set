import { Body, Controller, Get, Post } from '@nestjs/common';
import { createCustomerDto } from 'src/DTO/create-customer.dto';
import { CustomerService } from './customer.service';

@Controller('customer')
export class CustomerController {
    constructor(private CustomerService : CustomerService) {}
    @Post() 
    solve(@Body() data : createCustomerDto) {
        return this.CustomerService.solve(data);
    }
}

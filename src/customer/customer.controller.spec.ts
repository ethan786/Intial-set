import { Test, TestingModule } from '@nestjs/testing';
import { createCustomerDto } from '../DTO/create-customer.dto';
import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';

describe('CustomerController', () => {
  let controller: CustomerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomerController],
      providers: [CustomerService]
    }).compile();

    controller = module.get<CustomerController>(CustomerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return an object', () => {
    expect(controller.solve({column : []})).toEqual(
        expect.any(Object)
    );
  });

  it('should return intial set', () => {
    return expect(controller.solve({column : ["abc", "nAmE", "Company Name", "Customer Name",  "cde",  "phone_num", "id"]})).toEqual(
        [
            "nAmE",
            "Company Name",
            "Customer Name",
            "phone_num",
            "id"
        ]
    );
  });

});

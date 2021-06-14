import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CarService} from "../../../services";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {
  form: FormGroup;
  error: any;

  constructor(private carService: CarService, private router: Router) {
    this.form = new FormGroup({
      model: new FormControl(''),
      price: new FormControl(0),
      year: new FormControl(2021)
    })
  }

  ngOnInit(): void {
  }

  save(): void {
    this.carService.save(this.form.value).subscribe(() => {
      this.router.navigate(['cars'])
    }, ({error}) => {
      this.error = error
    })
  }
}

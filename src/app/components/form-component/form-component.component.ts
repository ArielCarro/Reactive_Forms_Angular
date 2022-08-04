import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent implements OnInit {

  formulario!: FormGroup;
  onSubmit() {
    if (this.formulario.valid) {
      console.log(this.formulario);
    }
  }
  constructor(
    private fb: FormBuilder
  ) {
    this.formulario = fb.group({
      nombre: new FormControl("", [Validators.required]),
      apellido: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required,Validators.email]),
      password: new FormControl("", [Validators.required,Validators.minLength(8),Validators.maxLength(20)]),
    })
  }
  ngOnInit(): void { }

}

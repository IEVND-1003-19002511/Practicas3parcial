import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-datos-alumno',
  templateUrl: './datos-alumno.component.html',
  styleUrls: ['./datos-alumno.component.css']
})
export class DatosAlumnoComponent implements OnInit { 

  alumnos!:FormGroup;

  ngOnInit(): void {
    this.alumnos= new FormGroup({
      matricula: new FormControl('',[Validators.required,Validators.minLength(3)]),
      nombre:new FormControl('',[Validators.required,Validators.minLength(3)]),
      apaterno:new FormControl('',[Validators.required,Validators.minLength(3)]),
      amaterno:new FormControl('',[Validators.required,Validators.minLength(3)]),
      correo:new FormControl('',[Validators.required,Validators.minLength(3)]),
    });

  }
  onSubmit(){
    console.log(this.alumnos.controls['matricula'].value)
    console.log(this.alumnos.controls['nombre'].value)
    console.log(this.alumnos.controls['apaterno'].value)
    console.log(this.alumnos.controls['amaterno'].value)
    console.log(this.alumnos.controls['correo'].value)

  }

}

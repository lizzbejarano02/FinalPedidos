import { ProductoService } from './../../../../servicios/producto.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ModeloProducto } from 'src/app/modelos/producto.modelo';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent  implements OnInit {

  fgValidador: FormGroup = this.fb.group({

    'nombre': ['',[Validators.required]],
    'precio': ['',[Validators.required]],
    'imagen': ['',[Validators.required]]
  });
  router: any;
  constructor(private fb: FormBuilder,
    private servicioProducto : ProductoService){

  }
  ngOnInit(): void {

  }
  GuardarProducto(){
    let nombre = this.fgValidador.controls["nombre"].value;
    let precio = parseInt(this.fgValidador.controls["precio"].value);
    let imagen = this.fgValidador.controls["imagen"].value;
    let p = new ModeloProducto();
    p.nombre = nombre;
    p.precio = precio;
    p.imagen = imagen;
    this.servicioProducto.CrearProducto(p).subscribe((datos: ModeloProducto) =>{
      alert("Producto Almacenado correctamente");
      this.router.navigate(["/administracion/listarProductos"]);
    },(error: any)=>{
      alert("Error al almacenar el producto");
    })
  }

}

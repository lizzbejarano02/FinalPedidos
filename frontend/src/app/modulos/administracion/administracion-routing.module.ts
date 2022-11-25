import { EditarProductoComponent } from './productos/editar-producto/editar-producto.component';
import { BuscarProductoComponent } from './productos/buscar-producto/buscar-producto.component';
import { EliminarProductoComponent } from './productos/eliminar-producto/eliminar-producto.component';
import { CrearProductoComponent } from './productos/crear-producto/crear-producto.component';
import { BuscarPersonaComponent } from './personas/buscar-persona/buscar-persona.component';
import { EliminarPersonaComponent } from './personas/eliminar-persona/eliminar-persona.component';
import { EditarPersonaComponent } from './personas/editar-persona/editar-persona.component';
import { CrearPersonaComponent } from './personas/crear-persona/crear-persona.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'crearPersona',
    component:CrearPersonaComponent
  },
  {
    path: 'editarPersona',
    component : EditarPersonaComponent
  },
  {
    path: 'eliminarPersona',
    component:EliminarPersonaComponent
  },
  {
    path: 'buscarPersona',
    component : BuscarPersonaComponent
  },




  {
    path: 'crearProducto',
    component:CrearProductoComponent
  },
  {
    path: 'editarProducto/:id',
    component : EditarProductoComponent
  },
  {
    path: 'eliminarProducto',
    component:EliminarProductoComponent
  },
  {
    path: 'buscarProducto',
    component : BuscarProductoComponent
  },
  {
    path: 'listarProductos',
    component : BuscarProductoComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }

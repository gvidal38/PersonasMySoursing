import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
import { PersonaInterface } from 'src/app/interface/persona.interface';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styles: [],
})
export class UserDetailComponent {
  usuarioId = Number(this.route.snapshot.paramMap.get('action'));

  public userForm = this.formBuilder.group({
    first: ['', [Validators.required]],
    last: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    balance: ['', [Validators.required]],
    address: ['', [Validators.required]],
  });
  info: PersonaInterface;
  tituloPantalla = 'Alta de Usuario';
  contasenasValidas = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {
    this.handleCleanForm();
  }

  validarCampo(campo): boolean {
    if (this.userForm.hasError('noSonIguales')) {
      return true;
    }

    return this.userForm.get(campo).invalid && this.userForm.get(campo).touched;
  }

  getErrorMessage(campo): string {
    const error = this.userForm.get(campo);
    if (error.hasError('email')) {
      return 'Correo invalido';
    }
    return 'Campo requerido';
  }

  handleResetForm(): void {
    this.userForm.reset();
  }

  handleSave(): void {
    if (!this.userForm.valid) {
      Swal.fire('Adventencia!', 'Valide los datos', 'warning');
      return;
    }
    var usersAdd = [];
    if (this.userService.existStorage('usersAdd')) {
      usersAdd = this.userService.getStorage('usersAdd');
    }
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const d = new Date();
    this.info.created = `${
      monthNames[d.getMonth()]
    } ${d.getDay()},${d.getFullYear()}`;
    usersAdd.push(this.info);
    this.userService.setStorage('usersAdd', usersAdd);
    Swal.fire('Exito!', 'Se agrego correctamente a la persona', 'success');
    this.handleCleanForm();
  }

  handleBack(): void {
    this.handleCleanForm();
    this.router.navigateByUrl('/dashboard');
  }

  handleCleanForm(): void {
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const d = new Date();

    this.info = {
      first: '',
      last: '',
      email: '',
      balance: 0,
      address: '',
      created: `${monthNames[d.getMonth()]} ${d.getDay()},${d.getFullYear()}`,
    };
  }

  currencyInputChanged(value) {
    var num = value.replace(/[$,]/g, '');
    return Number(num);
  }
}

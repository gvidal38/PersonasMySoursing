export class User {
  /**
   *
   */
  constructor(
    public rolId: number,
    public status: boolean,
    public nombreUsuario: string,
    public rolDescripcion: string,
    public correoElectronico: string,
    public sexo: string,
    public fechaCreacion: string,
    public usuarioId?: number,
    public contrasena?: string
  ) {}
}

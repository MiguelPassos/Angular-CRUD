import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../user.model';
import { Degree } from '../degree-model';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

    degrees: Degree[] = [
        { id: 0, nome: 'Selecione' },
        { id: 1, nome: 'Infantil' },
        { id: 2, nome: 'Fundamental' },
        { id: 3, nome: 'Médio' },
        { id: 4, nome: 'Superior' }
    ];

    user: User = {
        nome: '',
        sobrenome: '',
        email: '',
        dataNascimento: null,
        escolaridade: 0
    };

    date: string;

    constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) { }

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id');
        this.userService.readUserById(id).subscribe(user => {
            this.user = user;
            this.date = user.dataNascimento.toDateString();
            console.log(this.date);
        })
  }

    updateUser(): void {
        if (this.validateUser(this.user)) {
            this.userService.updateUser(this.user).subscribe(() => {
                this.userService.showMessage('Usuário atualizado com sucesso!');
                this.router.navigate(['/users']);
            });
        }
        else {
            this.userService.showMessage("Um ou mais dados inválidos. Verifique.", true)
        }
    }

    validateUser(user: User): boolean {
        var emailRegex = new RegExp("^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$");

        if (user != undefined && user.nome != '' && user.sobrenome != '' && user.dataNascimento != null && user.escolaridade != 0 && !emailRegex.test(user.email))
            return true;
        else
            return false;
    }

    cancel(): void {
        this.router.navigate(["/users"]);
    }
}

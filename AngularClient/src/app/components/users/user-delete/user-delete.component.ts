import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../user.model';
import { Degree } from '../degree-model';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent implements OnInit {

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

    constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) { }

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id');
        this.userService.readUserById(id).subscribe(user => {
            this.user = user;
        })
    }

    deleteUser(): void {
        this.userService.deleteUser(this.user).subscribe(() => {
            this.userService.showMessage('Usuário removido com sucesso!');
            this.router.navigate(['/users']);
        });
    }

    cancel(): void {
        this.router.navigate(['/users']);
    }

}

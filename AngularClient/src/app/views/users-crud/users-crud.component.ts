import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { HeaderService } from 'src/app/components/templates/header/header.service';
import { User } from '../../components/users/user.model';
import { UserService } from '../../components/users/user.service';
import { UserCreateModalComponent } from '../../components/users/user-create-modal/user-create-modal.component';
import { Degree } from '../../components/users/degree-model';

@Component({
    selector: 'app-users-crud',
    templateUrl: './users-crud.component.html',
    styleUrls: ['./users-crud.component.css']
})
export class UsersCrudComponent implements OnInit {

    users: User[];

    degrees: Degree[] = [
        { id: 0, nome: 'Selecione' },
        { id: 1, nome: 'Infantil' },
        { id: 2, nome: 'Fundamental' },
        { id: 3, nome: 'Médio' },
        { id: 4, nome: 'Superior' }
    ];

    constructor(public dialog: MatDialog, private userService: UserService, private headerService: HeaderService, private router: Router) {
        this.headerService.headerData = {
            title: "Cadastro de Usuários",
            icon: "people_alt",
            routeUrl: "/users"
        };
    }

    ngOnInit(): void {
        this.loadUsers();
    }

    loadUsers(): void {
        this.userService.readUsers().subscribe(users => {
            this.users = users;
        });
    }

    openDialog(): void {
        const modal = this.dialog.open(UserCreateModalComponent, {
            width: '400px',
            data: { name: '', price: null }
        });

        modal.afterClosed().subscribe(user => {
            if (this.validateUser(user)) {
                this.userService.createUser(user).subscribe(() => {
                    this.userService.showMessage('Usuário cadastrado com sucesso!');
                    this.loadUsers();
                });
            }
            else {
                this.userService.showMessage("Um ou mais dados inválidos. Verifique.", true)
            }
        });
    }

    validateUser(user: User): boolean{
        var emailRegex = new RegExp("^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$");

        if (user != undefined && user.nome != '' && user.sobrenome != '' && user.dataNascimento != null && user.escolaridade != 0 && !emailRegex.test(user.email))
            return true;
        else
            return false;
    }
}

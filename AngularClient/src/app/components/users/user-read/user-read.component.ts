import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { Degree } from '../degree-model';
import { User } from '../user.model';

@Component({
    selector: 'app-user-read',
    templateUrl: './user-read.component.html',
    styleUrls: ['./user-read.component.css']
})
export class UserReadComponent implements OnInit {

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
        });
    }

    voltar(): void {
        this.router.navigate(['/users']);
    }
}

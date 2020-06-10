import { Component, OnInit, Inject } from '@angular/core';
import { Degree } from '../degree-model';
import { User } from '../user.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'app-user-create-modal',
    templateUrl: './user-create-modal.component.html',
    styleUrls: ['./user-create-modal.component.css']
})
export class UserCreateModalComponent implements OnInit {

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

    constructor(public dialogRef: MatDialogRef<UserCreateModalComponent>,
        @Inject(MAT_DIALOG_DATA) public data: User) { }

    ngOnInit(): void {
    }

    cancel(): void {
        this.dialogRef.close();
    }
}

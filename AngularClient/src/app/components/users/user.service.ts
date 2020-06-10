import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, EMPTY } from 'rxjs';
import { User } from './user.model';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    httpOptions = { headers: { "Content-Type": "application/json" } };

    baseUrl = 'http://localhost:8066/api/usuarios';

    usuarios: User[];

    constructor(private snackBar: MatSnackBar, private httpClient: HttpClient) { }

    showMessage(msg: string, isError: boolean = false): void {
        this.snackBar.open(msg, '', {
            duration: 3000,
            horizontalPosition: "right",
            verticalPosition: "top",
            panelClass: isError ? ["msg-error"] : ["msg-success"]
        });
    }

    errorHandler(msg: any): Observable<any> {
        this.showMessage(msg, true);
        return EMPTY;
    }

    createUser(user: User): Observable<User> {
        console.log(JSON.stringify(user));
        return this.httpClient.post<User>(this.baseUrl, JSON.stringify(user), this.httpOptions).pipe(map((obj) => obj), catchError(() => this.errorHandler("Falha ao cadastrar o usuário!")));
    }

    readUsers(): Observable<User[]> {
        return this.httpClient.get<User[]>(this.baseUrl).pipe(map((obj) => obj), catchError(() => this.errorHandler("Falha ao obter os usuários!")));
    }

    readUserById(id: string): Observable<User> {
        const url = `${this.baseUrl}/${id}`;
        return this.httpClient.get<User>(url).pipe(map((obj) => obj), catchError(() => this.errorHandler("Falha ao obter o usuário!")));
    }

    updateUser(user: User): Observable<User> {
        return this.httpClient.put<User>(this.baseUrl, user, this.httpOptions).pipe(map((obj) => obj), catchError(() => this.errorHandler("Falha ao atualizar o usuário!")));
    }

    deleteUser(user: User): Observable<User> {
        const url = `${this.baseUrl}/${user.id}`;
        return this.httpClient.delete<User>(url).pipe(map((obj) => obj), catchError(() => this.errorHandler("Falha ao excluir o usuário!")));
    }
}

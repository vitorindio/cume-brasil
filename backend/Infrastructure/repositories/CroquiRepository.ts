import {Database} from 'sqlite3';
import {Croqui} from '../../Domain/models/Croqui';

export class CroquiRepository {
    private db: Database;

    constructor(db: Database) {
        this.db = db;
    }

    async getCroquiById(id: number): Promise<Croqui | null> {
        return new Promise((resolve, reject) => {
            this.db.get(`SELECT * FROM Croqui WHERE id = ?`, [id], (err, row: Croqui) => {
                if (err) {
                    reject(err);
                    return;
                }
                if (row) {
                    const croqui = new Croqui(
                        row.id,
                        row.nome,
                        row.imagemUrl,
                        row.autor,
                        row.descricao,
                        row.fonte_id
                    );
                    resolve(croqui);
                } else {
                    resolve(null);
                }
            });
        });

    }

    async getCroquis(): Promise<Croqui[] | null> {
        return new Promise((resolve, reject) => {
            this.db.all(`SELECT * FROM Croqui`, (err, rows: Croqui[]) => {
                if (err) {
                    reject(err);
                    return;
                }
                if (rows) {
                    const croquis = rows.map((row) => new Croqui(
                        row.id,
                        row.nome,
                        row.imagemUrl,
                        row.autor,
                        row.descricao,
                        row.fonte_id
                    ));
                    resolve(croquis);
                } else {
                    resolve(null);
                }
            });
        });

    }

    async createCroqui(croqui: Croqui): Promise<void> {
        return new Promise((resolve, reject) => {
            this.db.run(`INSERT INTO Croqui (nome, imagemUrl, autor, descricao, fonte_id) VALUES (?,?,?,?,?)`,
                [croqui.nome, croqui.imagemUrl, croqui.autor, croqui.descricao, croqui.fonte_id],
                (err) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    resolve();
                });
        });
    }

    async updateCroqui(croqui: Croqui): Promise<void> {
        return new Promise((resolve, reject) => {
            this.db.run(`UPDATE Croqui SET nome = ?, imagemUrl = ?, autor = ?, descricao = ?, fonte_id = ? WHERE id = ?`,
                [croqui.nome, croqui.imagemUrl, croqui.autor, croqui.descricao, croqui.fonte_id, croqui.id],
                (err) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    resolve();
                });
        });
    }

    async deleteCroqui(id: number): Promise<void> {
        return new Promise((resolve, reject) => {
            this.db.run(`DELETE FROM Croqui WHERE id = ?`,
                [id],
                (err) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    resolve();
                });
        });
    }
}
# bairrao

Login com JWT.

## Como rodar

1. `npm install`
2. Crie um arquivo `.env` com `JWT_SECRET=uma_chave_sua`
3. `npm start`
4. Abra http://localhost:3000
5. Entre com o usuário `admin` e a senha `1234`

O login devolve um token. A página envia esse token no header `Authorization` para `GET /perfil`.

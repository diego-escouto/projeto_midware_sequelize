// Configurando a conexão com o banco de dados usando Sequelize
require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER,
    process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false // Desativa logs SQL no console
});
// Testando a conexão
sequelize.authenticate()
    .then(() => console.log('Conectado ao banco de dados MySQL com Sequelize!'))
        .catch(err => console.error('Erro ao conectar ao MySQL:', err));
// Definindo o modelo Usuario
const Usuario = sequelize.define('Usuario', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    },
    idade: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: false
    },
}, {
    tableName: 'usuarios',
    timestamps: false // Desativa colunas createdAt e updatedAt
});

// Sincronizar modelo com o banco de dados
sequelize.sync({alter: true})
    .then(() => console.log('Modelo sincronizado com o banco de dados'))
    .catch(err => console.error('Erro ao sincronizar modelo:', err));

  // Funções CRUD utilizando Sequelize
// Inserindo um usuário
const inserirUsuario = async (nome, email, senha, idade) => {
    try {
        const usuario = await Usuario.create({ nome, email, senha, idade });
        console.log('Usuário inserido com sucesso! ID:', usuario.id);
    } catch (err) {
        console.error('Erro ao inserir usuário:', err);
    }
};
// Listando usuários
const listarUsuarios = async () => {
    try {
        const usuarios = await Usuario.findAll();
        console.log('Usuários:', usuarios);
    } catch (err) {
        console.error('Erro ao buscar usuários:', err);
    }
};
// Atualizando um usuário
const atualizarUsuario = async (id, nome) => {
    try {
        const usuario = await Usuario.update({ nome }, { where: { id } });
        console.log('Usuário atualizado com sucesso!');
    } catch (err) {
        console.error('Erro ao atualizar usuário:', err);
    }
};
// Excluindo um usuário
const excluirUsuario = async (id) => {
    try {
        await Usuario.destroy({ where: { id } });
        console.log('Usuário excluído com sucesso!');
    } catch (err) {
        console.error('Erro ao excluir usuário:', err);
    }
};
// Exportando funções CRUD
module.exports = {
    inserirUsuario, listarUsuarios, atualizarUsuario,
    excluirUsuario
};

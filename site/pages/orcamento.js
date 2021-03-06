import React, { useState } from 'react';
import Head from "next/head";
import { Jumbotron, Container, Col, Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import Menu from '../components/Menu';
import Rodape from '../components/Rodape';
import { fa } from '@fortawesome/free-solid-svg-icons';

function Orcamento() {

    const [orcamento, setOrcamento] = useState({
        name: '',
        email: '',
        telefone: '',
        projeto: ''
    });

    const [response, setResponse] = useState({
        formSave: false,
        type: '',
        message: ''
    });

    const onChangeInput = e => setOrcamento({ ...orcamento, [e.target.name]: e.target.value });


    const sendOrcamento = async e => {
        e.preventDefault();
        // alert('Enviar para API');
        //console.log(orcamento);

        setResponse({
            formSave: true
        });

        try {
            const res = await fetch('https://nodeact.fdandrade.com.br/api/orcamento', {
                method: 'POST',
                body: JSON.stringify(orcamento),
                headers: { 'Content-Type': 'application/json' }
            });

            const response = await res.json();

            if (response.error) {
                setResponse({
                    formSave: false,
                    type: 'error',
                    message: response.message
                });
            } else {
                setResponse({
                    formSave: false,
                    type: 'success',
                    message: response.message
                });
            }


        } catch (error) {
            setResponse({
                formSave: false,
                type: 'error',
                message: 'Orçamento não enviado!'
            });
        }


    }


    return (
        <div>
            <Head>
                <title>Orçamento</title>
                <meta name="description" content="Site Orçamento" />
            </Head>
            <Menu />
            <Jumbotron fluid className="descr-top">
                <style>
                    {`.descr-top{
                        background-color:#050c3d;
                        color:white;
                        padding-top:40px;
                        padding-bottom:40px;
                        margin-bottom: 0rem !important;
                    }`}
                </style>
                <Container className="text-center">
                    <h1 className="display-4">Orçamento</h1>
                    <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                    <p className="lead">
                        <a href='/orcamento' className="btn btn-outline-primary btn-lg mt-4">Solicitar Orçamento</a>
                    </p>
                </Container>
            </Jumbotron>
            <Jumbotron fluid className="form-orcamento">
                <style>
                    {`.form-orcamento{
                        background-color:#fff;
                        padding-top:80px;
                        padding-bottom:80px;
                        margin-bottom: 0rem !important;
                    }`}
                </style>
                <Container>
                    {response.type === 'error' ? <Alert color="danger">{response.message}</Alert> : ""}
                    {response.type === 'success' ? <Alert color="success">{response.message}</Alert> : ""}
                    <Form onSubmit={sendOrcamento}>
                        <FormGroup>
                            <Label for="name">Nome</Label>
                            <Input type="text" name="name" id="name" placeholder="Seu nome" onChange={onChangeInput} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input type="email" name="email" id="email" placeholder="Seu email" onChange={onChangeInput} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="telefone">Telefone</Label>
                            <Input type="text" name="telefone" id="telefone" placeholder="Seu telefone" onChange={onChangeInput} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="projeto">Projeto</Label>
                            <Input type="textarea" name="projeto" id="projeto" placeholder="Seu projeto" onChange={onChangeInput} />
                        </FormGroup>
                        {response.formSave ? <Button type="submit" outline color="danger" disabled>Enviando...</Button> : <Button type="submit" outline color="primary">Solicitar Orçamento</Button>}
                    </Form>
                </Container>
            </Jumbotron>

            <Rodape />
        </div>
    );
}

export default Orcamento
INSERT INTO JOB_FILTER.TB_COMPANIES (ID_COMPANY, NM_COMPANY, DS_COMPANY, EM_COMPANY, CT_COMPANY)
VALUES
    (1, 'Empresa 1', 'Descrição da Empresa 1', 'empresa1@test.com', 'Cidade 1'),
    (2, 'Empresa 2', 'Descrição da Empresa 2', 'empresa2@test.com', 'Cidade 2'),
    (3, 'Empresa 3', 'Descrição da Empresa 3', 'empresa3@test.com', 'Cidade 3'),
    (4, 'Empresa 4', 'Descrição da Empresa 4', 'empresa4@test.com', 'Cidade 4'),
    (5, 'Empresa 5', 'Descrição da Empresa 5', 'empresa5@test.com', 'Cidade 5'),
    (6, 'Empresa 6', 'Descrição da Empresa 6', 'empresa6@test.com', 'Cidade 6'),
    (7, 'Empresa 7', 'Descrição da Empresa 7', 'empresa7@test.com', 'Cidade 7'),
    (8, 'Empresa 8', 'Descrição da Empresa 8', 'empresa8@test.com', 'Cidade 8'),
    (9, 'Empresa 9', 'Descrição da Empresa 9', 'empresa9@test.com', 'Cidade 9'),
    (10, 'Empresa 10', 'Descrição da Empresa 10', 'empresa10@test.com', 'Cidade 10'),
    (11, 'Empresa 11', 'Descrição da Empresa 11', 'empresa11@test.com', 'Cidade 11'),
    (12, 'Empresa 12', 'Descrição da Empresa 12', 'empresa12@test.com', 'Cidade 12'),
    (13, 'Empresa 13', 'Descrição da Empresa 13', 'empresa13@test.com', 'Cidade 13'),
    (14, 'Empresa 14', 'Descrição da Empresa 14', 'empresa14@test.com', 'Cidade 14');

INSERT INTO JOB_FILTER.TB_TAGS (ID_TAG, NM_TAG)
VALUES
    (1, 'Tag 1'),
    (2, 'Tag 2'),
    (3, 'Tag 3'),
    (4, 'Tag 4'),
    (5, 'Tag 5'),
    (6, 'Tag 6'),
    (7, 'Tag 7'),
    (8, 'Tag 8'),
    (9, 'Tag 9'),
    (10, 'Tag 10'),
    (11, 'Tag 11'),
    (12, 'Tag 12'),
    (13, 'Tag 13'),
    (14, 'Tag 14');

INSERT INTO JOB_FILTER.TB_OPPORTUNITIES (ID_OPPORTUNITY, NM_OPPORTUNITY, DS_OPPORTUNITY, TP_OPPORTUNITY, VL_SALARY)
VALUES
    (1, 'Vaga 1', 'Descrição da Vaga 1', 'REMOTE', 5000.00),
    (2, 'Vaga 2', 'Descrição da Vaga 2', 'IN_PERSON', 4000.00),
    (3, 'Vaga 3', 'Descrição da Vaga 3', 'HYBRID', 6000.00),
    (4, 'Vaga 4', 'Descrição da Vaga 4', 'REMOTE', 5500.00),
    (5, 'Vaga 5', 'Descrição da Vaga 5', 'IN_PERSON', 4500.00),
    (6, 'Vaga 6', 'Descrição da Vaga 6', 'HYBRID', 6500.00),
    (7, 'Vaga 7', 'Descrição da Vaga 7', 'REMOTE', 5200.00),
    (8, 'Vaga 8', 'Descrição da Vaga 8', 'IN_PERSON', 4200.00),
    (9, 'Vaga 9', 'Descrição da Vaga 9', 'HYBRID', 6200.00),
    (10, 'Vaga 10', 'Descrição da Vaga 10', 'REMOTE', 5100.00),
    (11, 'Vaga 11', 'Descrição da Vaga 11', 'IN_PERSON', 4100.00),
    (12, 'Vaga 12', 'Descrição da Vaga 12', 'HYBRID', 6100.00),
    (13, 'Vaga 13', 'Descrição da Vaga 13', 'REMOTE', 5300.00),
    (14, 'Vaga 14', 'Descrição da Vaga 14', 'IN_PERSON', 4400.00);

INSERT INTO JOB_FILTER.TB_OPPORTUNITY_TAG (ID_OPPORTUNITY, ID_TAG)
VALUES
    (1, 1),
    (1, 2),
    (2, 1),
    (2, 3),
    (3, 2),
    (3, 3),
    (4, 1),
    (4, 2),
    (5, 3),
    (5, 4),
    (6, 1),
    (6, 4),
    (7, 2),
    (7, 4);

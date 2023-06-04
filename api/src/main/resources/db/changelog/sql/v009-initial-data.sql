-- Inserindo empresas
INSERT INTO JOB_FILTER.TB_COMPANIES (ID_COMPANY, NM_COMPANY, DS_COMPANY, EM_COMPANY, CT_COMPANY)
VALUES
    (1, 'Empresa A', 'Descrição da Empresa A', 'empresa_a@test.com', 'Brasília'),
    (2, 'Empresa B', 'Descrição da Empresa B', 'empresa_b@test.com', 'Rio de Janeiro'),
    (3, 'Empresa C', 'Descrição da Empresa C', 'empresa_c@test.com', 'São Paulo'),
    (4, 'Empresa D', 'Descrição da Empresa D', 'empresa_d@test.com', 'Salvador'),
    (5, 'Empresa E', 'Descrição da Empresa E', 'empresa_e@test.com', 'Fortaleza'),
    (6, 'Empresa F', 'Descrição da Empresa F', 'empresa_f@test.com', 'Belo Horizonte'),
    (7, 'Empresa G', 'Descrição da Empresa G', 'empresa_g@test.com', 'Manaus'),
    (8, 'Empresa H', 'Descrição da Empresa H', 'empresa_h@test.com', 'Recife'),
    (9, 'Empresa I', 'Descrição da Empresa I', 'empresa_i@test.com', 'Porto Alegre'),
    (10, 'Empresa J', 'Descrição da Empresa J', 'empresa_j@test.com', 'Curitiba'),
    (11, 'Empresa K', 'Descrição da Empresa K', 'empresa_k@test.com', 'Belém'),
    (12, 'Empresa L', 'Descrição da Empresa L', 'empresa_l@test.com', 'Goiânia'),
    (13, 'Empresa M', 'Descrição da Empresa M', 'empresa_m@test.com', 'Florianópolis'),
    (14, 'Empresa N', 'Descrição da Empresa N', 'empresa_n@test.com', 'Vitória');

-- Inserindo tags de conhecimentos em TI
INSERT INTO JOB_FILTER.TB_TAGS (ID_TAG, NM_TAG)
VALUES
    (1, 'Java'),
    (2, 'Python'),
    (3, 'JavaScript'),
    (4, 'C#'),
    (5, 'SQL'),
    (6, 'HTML/CSS'),
    (7, 'React'),
    (8, 'Angular'),
    (9, 'Node.js'),
    (10, 'DevOps'),
    (11, 'Cloud Computing'),
    (12, 'Big Data'),
    (13, 'Machine Learning'),
    (14, 'Cybersecurity');

-- Inserindo oportunidades de vagas de TI
INSERT INTO JOB_FILTER.TB_OPPORTUNITIES (ID_OPPORTUNITY, NM_OPPORTUNITY, DS_OPPORTUNITY, TP_OPPORTUNITY, VL_SALARY, ID_COMPANY)
VALUES
    (1, 'Desenvolvedor Java', 'Descrição da Vaga 1', 'REMOTE', 5000.00, 1),
    (2, 'Engenheiro de Dados', 'Descrição da Vaga 2', 'IN_PERSON', 8000.00, 2),
    (3, 'Front-end Developer', 'Descrição da Vaga 3', 'HYBRID', 6000.00, 1),
    (4, 'Analista de Segurança', 'Descrição da Vaga 4', 'REMOTE', 7500.00, 4),
    (5, 'Full Stack Developer', 'Descrição da Vaga 5', 'IN_PERSON', 6500.00, 2),
    (6, 'Cloud Architect', 'Descrição da Vaga 6', 'REMOTE', 9000.00, 7),
    (7, 'QA Engineer', 'Descrição da Vaga 7', 'IN_PERSON', 5500.00, 4),
    (8, 'DevOps Engineer', 'Descrição da Vaga 8', 'HYBRID', 7000.00, 7),
    (9, 'Data Scientist', 'Descrição da Vaga 9', 'REMOTE', 8000.00, 9),
    (10, 'Back-end Developer', 'Descrição da Vaga 10', 'IN_PERSON', 6000.00, 1),
    (11, 'Cybersecurity Analyst', 'Descrição da Vaga 11', 'HYBRID', 7500.00, 4),
    (12, 'UI/UX Designer', 'Descrição da Vaga 12', 'REMOTE', 5500.00, 3),
    (13, 'Machine Learning Engineer', 'Descrição da Vaga 13', 'IN_PERSON', 8500.00, 2),
    (14, 'Database Administrator', 'Descrição da Vaga 14', 'HYBRID', 7000.00, 12);

-- Associando tags às oportunidades
INSERT INTO JOB_FILTER.TB_OPPORTUNITY_TAG (ID_OPPORTUNITY, ID_TAG)
VALUES
    (1, 1),
    (1, 6),
    (1, 9),
    (2, 12),
    (2, 10),
    (3, 6),
    (3, 7),
    (4, 14),
    (4, 4),
    (5, 6),
    (5, 8),
    (6, 11),
    (6, 10),
    (7, 6),
    (7, 5);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FakeJobs1650665893539 = void 0;
class FakeJobs1650665893539 {
    async up(queryRunner) {
        await queryRunner.query(`
insert into job (title, description, "creatorId") values ('Marketing Manager', 'Nulla ac enim.', 1);
insert into job (title, description, "creatorId") values ('Senior Editor', 'Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.', 1);
insert into job (title, description, "creatorId") values ('Statistician IV', 'Quisque ut erat. Curabitur gravida nisi at nibh.', 1);
insert into job (title, description, "creatorId") values ('Information Systems Manager', 'Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', 1);
insert into job (title, description, "creatorId") values ('Engineer IV', 'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', 1);
insert into job (title, description, "creatorId") values ('Analog Circuit Design manager', 'In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.', 1);
insert into job (title, description, "creatorId") values ('Analyst Programmer', 'Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 1);
insert into job (title, description, "creatorId") values ('Social Worker', 'Sed ante.', 1);
insert into job (title, description, "creatorId") values ('Paralegal', 'Sed accumsan felis. Ut at dolor quis odio consequat varius.', 1);
insert into job (title, description, "creatorId") values ('Tax Accountant', 'Vivamus tortor. Duis mattis egestas metus.', 1);
insert into job (title, description, "creatorId") values ('Biostatistician IV', 'Quisque porta volutpat erat.', 1);
insert into job (title, description, "creatorId") values ('Technical Writer', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.', 1);
insert into job (title, description, "creatorId") values ('Human Resources Manager', 'Phasellus sit amet erat. Nulla tempus.', 1);
insert into job (title, description, "creatorId") values ('Civil Engineer', 'Suspendisse potenti.', 1);
insert into job (title, description, "creatorId") values ('Clinical Specialist', 'Aenean fermentum.', 1);
insert into job (title, description, "creatorId") values ('Research Nurse', 'Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 1);
insert into job (title, description, "creatorId") values ('Software Test Engineer I', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.', 1);
insert into job (title, description, "creatorId") values ('Financial Analyst', 'Etiam vel augue.', 1);
insert into job (title, description, "creatorId") values ('Geological Engineer', 'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.', 1);
insert into job (title, description, "creatorId") values ('Administrative Officer', 'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 1);
insert into job (title, description, "creatorId") values ('Research Nurse', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.', 1);
insert into job (title, description, "creatorId") values ('Payment Adjustment Coordinator', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.', 1);
insert into job (title, description, "creatorId") values ('Legal Assistant', 'Nulla nisl.', 1);
insert into job (title, description, "creatorId") values ('Director of Sales', 'In quis justo. Maecenas rhoncus aliquam lacus.', 1);
insert into job (title, description, "creatorId") values ('Biostatistician IV', 'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', 1);
insert into job (title, description, "creatorId") values ('Senior Quality Engineer', 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 1);
insert into job (title, description, "creatorId") values ('Tax Accountant', 'Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 1);
insert into job (title, description, "creatorId") values ('Account Executive', 'Vestibulum rutrum rutrum neque.', 1);
insert into job (title, description, "creatorId") values ('Statistician III', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.', 1);
insert into job (title, description, "creatorId") values ('Quality Engineer', 'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.', 1);
insert into job (title, description, "creatorId") values ('Web Designer I', 'Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', 1);
insert into job (title, description, "creatorId") values ('Food Chemist', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis.', 1);
insert into job (title, description, "creatorId") values ('Electrical Engineer', 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', 1);
insert into job (title, description, "creatorId") values ('Legal Assistant', 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.', 1);
insert into job (title, description, "creatorId") values ('Account Executive', 'Nulla mollis molestie lorem.', 1);
insert into job (title, description, "creatorId") values ('GIS Technical Architect', 'Aliquam non mauris. Morbi non lectus.', 1);
insert into job (title, description, "creatorId") values ('Software Test Engineer IV', 'In congue. Etiam justo.', 1);
insert into job (title, description, "creatorId") values ('Executive Secretary', 'Praesent blandit.', 1);
insert into job (title, description, "creatorId") values ('Quality Control Specialist', 'Aenean lectus. Pellentesque eget nunc.', 1);
insert into job (title, description, "creatorId") values ('Web Designer III', 'Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 1);
insert into job (title, description, "creatorId") values ('Accountant IV', 'Donec vitae nisi.', 1);
insert into job (title, description, "creatorId") values ('Payment Adjustment Coordinator', 'Morbi non lectus.', 1);
insert into job (title, description, "creatorId") values ('Social Worker', 'Ut tellus. Nulla ut erat id mauris vulputate elementum.', 1);
insert into job (title, description, "creatorId") values ('Food Chemist', 'Donec dapibus. Duis at velit eu est congue elementum.', 1);
insert into job (title, description, "creatorId") values ('Design Engineer', 'Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.', 1);
insert into job (title, description, "creatorId") values ('Software Consultant', 'In hac habitasse platea dictumst.', 1);
insert into job (title, description, "creatorId") values ('Analog Circuit Design manager', 'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.', 1);
insert into job (title, description, "creatorId") values ('Marketing Manager', 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', 1);
insert into job (title, description, "creatorId") values ('Programmer I', 'Duis mattis egestas metus.', 1);
insert into job (title, description, "creatorId") values ('Senior Financial Analyst', 'Proin risus.', 1);
insert into job (title, description, "creatorId") values ('Teacher', 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.', 1);
insert into job (title, description, "creatorId") values ('Software Consultant', 'Nulla ac enim.', 1);
insert into job (title, description, "creatorId") values ('Recruiter', 'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.', 1);
insert into job (title, description, "creatorId") values ('Account Coordinator', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.', 1);
insert into job (title, description, "creatorId") values ('Automation Specialist I', 'Quisque ut erat. Curabitur gravida nisi at nibh.', 1);
insert into job (title, description, "creatorId") values ('Recruiting Manager', 'In congue. Etiam justo.', 1);
insert into job (title, description, "creatorId") values ('Structural Analysis Engineer', 'Morbi quis tortor id nulla ultrices aliquet.', 1);
insert into job (title, description, "creatorId") values ('GIS Technical Architect', 'Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.', 1);
insert into job (title, description, "creatorId") values ('Assistant Professor', 'Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.', 1);
insert into job (title, description, "creatorId") values ('Senior Quality Engineer', 'Aenean sit amet justo. Morbi ut odio.', 1);
insert into job (title, description, "creatorId") values ('Web Developer II', 'Nullam molestie nibh in lectus.', 1);
insert into job (title, description, "creatorId") values ('Nurse Practicioner', 'Ut tellus. Nulla ut erat id mauris vulputate elementum.', 1);
insert into job (title, description, "creatorId") values ('Chief Design Engineer', 'Suspendisse potenti. In eleifend quam a odio.', 1);
insert into job (title, description, "creatorId") values ('Account Representative III', 'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 1);
insert into job (title, description, "creatorId") values ('Geologist I', 'Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', 1);
insert into job (title, description, "creatorId") values ('Mechanical Systems Engineer', 'Sed accumsan felis.', 1);
insert into job (title, description, "creatorId") values ('Design Engineer', 'Proin risus. Praesent lectus.', 1);
insert into job (title, description, "creatorId") values ('Help Desk Technician', 'Phasellus in felis.', 1);
insert into job (title, description, "creatorId") values ('Assistant Professor', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.', 1);
insert into job (title, description, "creatorId") values ('Mechanical Systems Engineer', 'Suspendisse potenti. In eleifend quam a odio.', 1);
insert into job (title, description, "creatorId") values ('VP Sales', 'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', 1);
insert into job (title, description, "creatorId") values ('Web Developer IV', 'Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 1);
insert into job (title, description, "creatorId") values ('Internal Auditor', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.', 1);
insert into job (title, description, "creatorId") values ('Nurse', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.', 1);
insert into job (title, description, "creatorId") values ('Administrative Officer', 'Cras in purus eu magna vulputate luctus.', 1);
insert into job (title, description, "creatorId") values ('Software Engineer II', 'Pellentesque at nulla. Suspendisse potenti.', 1);
insert into job (title, description, "creatorId") values ('Senior Sales Associate', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.', 1);
insert into job (title, description, "creatorId") values ('Software Engineer IV', 'Donec ut dolor.', 1);
insert into job (title, description, "creatorId") values ('Developer I', 'Morbi porttitor lorem id ligula.', 1);
insert into job (title, description, "creatorId") values ('Nuclear Power Engineer', 'Maecenas tincidunt lacus at velit.', 1);
insert into job (title, description, "creatorId") values ('Senior Financial Analyst', 'Aliquam sit amet diam in magna bibendum imperdiet.', 1);
insert into job (title, description, "creatorId") values ('Senior Editor', 'Proin at turpis a pede posuere nonummy.', 1);
insert into job (title, description, "creatorId") values ('Staff Scientist', 'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.', 1);
insert into job (title, description, "creatorId") values ('Structural Engineer', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 1);
insert into job (title, description, "creatorId") values ('Nurse Practicioner', 'Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.', 1);
insert into job (title, description, "creatorId") values ('Account Coordinator', 'Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', 1);
insert into job (title, description, "creatorId") values ('Cost Accountant', 'Nulla tellus.', 1);
insert into job (title, description, "creatorId") values ('Civil Engineer', 'Mauris sit amet eros.', 1);
insert into job (title, description, "creatorId") values ('Computer Systems Analyst IV', 'Duis at velit eu est congue elementum.', 1);
insert into job (title, description, "creatorId") values ('Computer Systems Analyst IV', 'Nullam molestie nibh in lectus.', 1);
insert into job (title, description, "creatorId") values ('Editor', 'Aenean lectus. Pellentesque eget nunc.', 1);
insert into job (title, description, "creatorId") values ('Desktop Support Technician', 'Vivamus vel nulla eget eros elementum pellentesque.', 1);
insert into job (title, description, "creatorId") values ('Structural Analysis Engineer', 'Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', 1);
insert into job (title, description, "creatorId") values ('Software Consultant', 'Phasellus in felis. Donec semper sapien a libero.', 1);
insert into job (title, description, "creatorId") values ('Senior Developer', 'Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.', 1);
insert into job (title, description, "creatorId") values ('Tax Accountant', 'Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.', 1);
insert into job (title, description, "creatorId") values ('Analog Circuit Design manager', 'Integer ac leo. Pellentesque ultrices mattis odio.', 1);
insert into job (title, description, "creatorId") values ('Actuary', 'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', 1);
insert into job (title, description, "creatorId") values ('Account Executive', 'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', 1);
insert into job (title, description, "creatorId") values ('Nurse Practicioner', 'Cras pellentesque volutpat dui.', 1);`);
    }
    async down(_) { }
}
exports.FakeJobs1650665893539 = FakeJobs1650665893539;
//# sourceMappingURL=1650665893539-FakeJobs.js.map
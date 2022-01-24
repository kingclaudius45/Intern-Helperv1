# Intern_Helper
  This app helps you to post job/interships posts for the user.
  This app provides a API call for creating job/intern and also provides us with posting of link.
  This app helps to post info via form as well.
  This app also provides a delete option through unique ID via API call.
  Also it displays all companies that are active.
## Installation
  ```bash
npm init
npm i express sequelize mysql2 nodemon(dev)
  ```

## Database management

### Database creation
```bash
mysql -u root -p
create database internshipdb;
create user internuser identified by 'internpass'
use internshipdb;
grant all privileges on internshipdb.* to internuser
```
### ORM
```python
Sequelize is used as ORM for this project.
```
   
### Database Information
```python
Database only contain job/internship table which has the following model
1.id(pk)
2.companyName
3.link
4.lastDate
5.testDate
```
## API

### Get
```python
/api/jobs
- displays all internship/job cards
```
### Post
```python
/api/jobs
- creates a post
   body parameter:1.id(pk),companyName,link,lastDate,testDate
```
### Delete
```python   
/api/jobs/:id
-delete the job with id=id
```
## Details

### Company
```python
-displays list of all companies that have a vacancy for job/internship
```
### All-jobs(home)
```python
- this page contains all the jobs one can apply for
```
### Form for method Post
```python
 /writejobs
-lands with a form where we can manually post a job  
```
# Future
```
1.Plan to include login system as well.
2.Plan to include a alert system for expiration of any link.
3.Plan to delete card on the basis of lastdate provided.
```
## Micro Frontend testing

POC of a monorepo Angular worksapce with several projects to practice:

- [x] Angular + nx
- [x] Angular + Module Federation
- [x] Micro Frontend architecture
- [ ] Import remote modules
- [ ] Import remote components
- [ ] Share state


### Commands

 - Create empty workspace
```
npx create-nx-workspace@latest workspace --preset=empty
```
 - Install packages
 ```
 npm i --save-dev @nrwl/angular
 npm i --save bootstrap @angular-architects/module-federation
 ```
- Create projects
```
nx g @nrwl/angular:host host --e2eTestRunner=none
nx g @nrwl/angular:remote mf1 --host=host --e2eTestRunner=none
nx g @nrwl/angular:remote mf2 --host=host --e2eTestRunner=none
nx g @nrwl/angular:remote mf3 --host=host --e2eTestRunner=none
```
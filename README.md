## Micro Frontend testing

POC of a monorepo Angular worksapce with several projects to practice:

- [x] Angular + nx
- [x] Angular + Module Federation
- [x] Micro Frontend architecture
- [x] Import remote modules
- [x] Import remote components
- [x] Share state


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
- Create components
```
nx g @nrwl/angular:component home --project host
nx g @nrwl/angular:component header --project host
nx g @nrwl/angular:component home --project mf2
nx g @nrwl/angular:component footer --project mf2
```
- Create receiver component
```
nx g @nrwl/angular:component footer-host --project host
```
- Create library and service
```
nx g @nrwl/angular:lib shared/data-access-user
nx g @nrwl/angular:service user --project=shared-data-access-user
```
add "export * from './lib/user.service';" to \microfrontend-testing\workspace\libs\shared\data-access-user\src\index.ts
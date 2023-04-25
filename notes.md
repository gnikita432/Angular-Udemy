ng serve

//manual method of adding component

direct method of adding component
Templates
ng g c servers
ng generate component servers


Styles - app css component
or we can add inline css too like this
@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  // styleUrls: ['./servers.component.css']
  styles: [' h3{color:red;}'],
})

Selector- 
unique selector
we can use selectors as attributes too just like we do in css
like    selector: '[app-servers]', <div app-servers ></div>

also we can use it like class to selector:'.app-servers',

3 options only not id and all



-------------------------data binding-------------------
for non static 

output data
1) string interpolation ({{data}})
2) property Binding ([property]="data")

react to user events

Event Binding ((event)="expression")

two way data binding ([(ngmodel)] = "data")


Propety Binding []
One advantage:
We are able to change things in run time

property binding vs string interpolation 
if you want to o/p some data use string interpolation 
and if you want to change any propery such as text and all we use property binding 
ex: [innertext] ="yellow"


Event Binding ()


for two way data binding we use ngmodule which is from form module






<!-- --------------------------------------Directives----------------------------- -->
Directives are Instructions in the DOM 

build in directives:

Structural directives
1) *ngIf

2) for if else
we use 
<ng-template #noUser>
<p>No user found</p>
</ng-template>
<p *ngIf="user; else noUser"></p>

attribute directives

ngStyle - dynamically update styles
<p [ngStyle] = "{backgroundColor:getColor()}" >user is {{status}}</p>
used property binding too here

ngClass - dynamixally add or remove classes
[ngClass] = "{online: status === 'online'}"
key value pair
if status is online then only attached the online class otherwise no online class

structural derivative:
ngFor - kind of loop 
  *ngFor = " let user of users"

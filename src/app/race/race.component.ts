import { AfterContentInit, Component, ViewChild, OnInit } from "@angular/core";
import { Router } from "@angular/router";
declare var google;

@Component({
    selector: 'app-race',
    templateUrl: 'race.component.html',
    styleUrls: ['race.component.scss']
})

export class RaceComponent implements OnInit, AfterContentInit{
    public map:any;
    public storeMarker:any;
    public myDistance = 400;
    public opponentDistance = 400;
    private service = new google.maps.DistanceMatrixService();
    private storePosition = new google.maps.LatLng(40.756620959037335, -73.98674250280871 );
    private myPosition = new google.maps.LatLng(40.75802990631127, -73.98901463686569 );
    public userMarker=  new google.maps.Marker();
    private userPositions= [
        {distance : 332 , LatLng: new google.maps.LatLng(40.75783130712518, -73.98909912644376)},
        {distance : 305, LatLng: new google.maps.LatLng(40.75764633315161, -73.98867405753954)},
        {distance : 267, LatLng: new google.maps.LatLng(40.75749852579875, -73.98832067651722)},
        {distance : 220, LatLng: new google.maps.LatLng(40.757171054657576, -73.98757907468948)},
        {distance :143 , LatLng: new google.maps.LatLng(40.75697560220153, -73.98706518482629)},
        {distance : 74, LatLng: new google.maps.LatLng(40.75677080008439, -73.98657553530546)},
        {distance : 3, LatLng: new google.maps.LatLng(40.756620959037335, -73.98674250280871)}
    ];
    
    @ViewChild('map', {static: true}) mapElement:any;
    constructor(private router: Router){}

    ngOnInit(){
        // setInterval(()=>{
            
        //     this.myDistance -= this._randomNumber();
        //     this.opponentDistance -= this._randomNumber();
        // }, 3000)
    }

    ngAfterContentInit(){
        this.map = new google.maps.Map(this.mapElement.nativeElement, {
            center: this.storePosition,
            zoom: 16,
          });
        this.storeMarker = new google.maps.Marker({position:this.storePosition, map: this.map, label:'AT&T',icon: "http://maps.google.com/mapfiles/kml/paddle/blu-blank.png"})
        this.userMarker.setPosition(this.myPosition);
        this.userMarker.setMap(this.map);
        this.userMarker.setLabel('you');
        this.moveMarker(this.userMarker);
        //= new google.maps.Marker({position:this.myPosition, map: this.map, label:'You'})
        
    }
    private moveMarker(marker) {
        let userPosition; 
        let interval = setInterval(()=>{
            userPosition = this.userPositions.shift()
            if (userPosition){
                marker.setPosition(userPosition.LatLng);
                this.myDistance = userPosition.distance;
                this.opponentDistance = userPosition.distance + this._randomNumber();
            } else {                
                clearInterval(interval);
                this.router.navigateByUrl('success');

                
            }
        },3000)
        
    }
   private _randomNumber(){
        return Math.floor(Math.random() * 10);
   }

}


// 1. 40.75783130712518, -73.98909912644376
// 2. 40.75764633315161, -73.98867405753954
// 3. 40.75749852579875, -73.98832067651722
// 4. 40.75697560220153, -73.98706518482629
// 5. 40.75677080008439, -73.98657553530546
// 6. 40.756620959037335, -73.98674250280871


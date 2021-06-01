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
            disableDefaultUI: true,
            styles: [
                { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
                { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
                { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
                {
                  featureType: "administrative.locality",
                  elementType: "labels.text.fill",
                  stylers: [{ color: "#d59563" }],
                },
                {
                  featureType: "poi",
                  elementType: "labels.text.fill",
                  stylers: [{ color: "#d59563" }],
                },
                {
                  featureType: "poi.park",
                  elementType: "geometry",
                  stylers: [{ color: "#263c3f" }],
                },
                {
                  featureType: "poi.park",
                  elementType: "labels.text.fill",
                  stylers: [{ color: "#6b9a76" }],
                },
                {
                  featureType: "road",
                  elementType: "geometry",
                  stylers: [{ color: "#38414e" }],
                },
                {
                  featureType: "road",
                  elementType: "geometry.stroke",
                  stylers: [{ color: "#212a37" }],
                },
                {
                  featureType: "road",
                  elementType: "labels.text.fill",
                  stylers: [{ color: "#9ca5b3" }],
                },
                {
                  featureType: "road.highway",
                  elementType: "geometry",
                  stylers: [{ color: "#746855" }],
                },
                {
                  featureType: "road.highway",
                  elementType: "geometry.stroke",
                  stylers: [{ color: "#1f2835" }],
                },
                {
                  featureType: "road.highway",
                  elementType: "labels.text.fill",
                  stylers: [{ color: "#f3d19c" }],
                },
                {
                  featureType: "transit",
                  elementType: "geometry",
                  stylers: [{ color: "#2f3948" }],
                },
                {
                  featureType: "transit.station",
                  elementType: "labels.text.fill",
                  stylers: [{ color: "#d59563" }],
                },
                {
                  featureType: "water",
                  elementType: "geometry",
                  stylers: [{ color: "#17263c" }],
                },
                {
                  featureType: "water",
                  elementType: "labels.text.fill",
                  stylers: [{ color: "#515c6d" }],
                },
                {
                  featureType: "water",
                  elementType: "labels.text.stroke",
                  stylers: [{ color: "#17263c" }],
                },
              ]
          });
        this
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
        },1700)
        
    }
   private _randomNumber(){
        return Math.floor(Math.random() * 10);
   }

}


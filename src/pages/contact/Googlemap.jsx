import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class Googlemap {
    render() {
        return (
            <Map google={this.props.google} zoom={14}>

                <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />

                <InfoWindow onClose={this.onInfoWindowClose}>
                    <div>
                        <h1>{this.state.selectedPlace.name}</h1>
                    </div>
                </InfoWindow>
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyAo9qbc8yQVksGcJiFtYNvrMZifDCuLdgk")
})(Googlemap)
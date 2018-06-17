/* 다음 지도 API START */
var mapContainer = document.getElementById('map');
var customInformation = mapContainer.getAttribute('class').split(',');

var lat = customInformation[0].replace(/\s/g, "");
var lng = customInformation[1].replace(/\s/g, "");
var locationName = customInformation[2];

var mapOption = {
    center: new daum.maps.LatLng(lat, lng), // 지도의 중심좌표
    level: 3 // 지도의 확대 레벨
};

var map = new daum.maps.Map(mapContainer, mapOption);

var imageSrc = 'http://res.cloudinary.com/dq7dviioh/image/upload/v1527593227/inthemusic_marker.png', // 마커 이미지 주소
    imageSize = new daum.maps.Size(64, 69), // 마커 이미지 크기
    imageOption = {offset: new daum.maps.Point(27, 69)}; // 마커 이미지 옵션, 마커의 좌표와 일치시킬 이미지 안에서의 좌표

// 마커의 이미지정보를 가지고 있는 마커이미지 생성
var markerImage = new daum.maps.MarkerImage(imageSrc, imageSize, imageOption),
    markerPosition = new daum.maps.LatLng(lat, lng); // 마커가 표시될 위치

// 마커 생성
var marker = new daum.maps.Marker({
    position: markerPosition,
    image: markerImage // 마커이미지 설정
});

// 마커가 지도 위에 표시되도록 설정
marker.setMap(map);

// 커스텀 오버레이에 표출될 내용으로 HTML 문자열이나 document element가 가능
var htmlContent =
    '<div class="inthemusicOverlay">' +
        '<a id="customLocationLink" href="http://map.daum.net/link/map/11394059" target="_blank">' +
            '<span id="customLocation" class="title">' + locationName + '</span>' +
        '</a>' +
    '</div>';

// 커스텀 오버레이가 표시될 위치
var position = new daum.maps.LatLng(lat, lng);

// 커스텀 오버레이를 생성
var customOverlay = new daum.maps.CustomOverlay({
    map: map,
    position: position,
    content: htmlContent,
    yAnchor: 1
});

var locationLink = 'http://map.daum.net/link/map/' + locationName + ',' + lat + ',' + lng;
document.querySelector('#customLocationLink').setAttribute('href', locationLink);
/* 다음 지도 API END */
import React from 'react'
import TextBox from './TextBox'

function Details({props}) {
  return (
    <div className="flex flex-col border-solid border-2 border-light-blue-500 rounded-md p-4">
      <TextBox
        className="mb-6"
        heading="Description"
        content={`${props.company.catchPhrase}, ${props.company.bs}`}
      />
      <div className="flex">
        <div className="w-2/5">
          <TextBox
            className="mb-2 "
            heading="Contact Person"
            content={props.name}
          />
          <TextBox
            className="mb-2 "
            heading="Website"
            content={props.website}
          />
          <TextBox className="mb-2 " heading="Emails" content={props.email} />
          <TextBox className="mb-2 " heading="Phones" content={props.phone} />
        </div>
        <div>
          <TextBox
            className="mb-2 "
            heading="Address"
            content={`${props.address.suite}, ${props.address.street}`}
          />
          <TextBox
            className="mb-2 "
            heading="City"
            content={props.address.city}
          />
          <TextBox
            className="mb-2 "
            heading="Zip Code"
            content={props.address.zipcode}
          />
          <TextBox
            className="mb-2 "
            heading="Geo-Location"
            content={`Lat: ${props.address.geo.lat} Lng: ${props.address.geo.lng}`}
          />
        </div>
      </div>
    </div>
  );
}

export default Details
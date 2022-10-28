export const MovieThumbnail = ({program}) => 
    <div className="shadow">
        <div className='d-lg-none mx-0 px-0'>
            <img src={`${program.image.url}?width=120`} alt="poster" />
        </div>
        <div className='d-none d-lg-block'>
            <img src={`${program.landscapeImage.url}?width=300`} alt="poster" />
        </div>
    </div> 

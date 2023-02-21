import notFoundImg from '../assets/img/notFound.jpg'

const NotFound = () => {
  return (
    <div className="content__error-info">
      <img src={notFoundImg} alt="Картинки 'Не знайдено' не знайдено)"/>
    </div>
  );
};

export default NotFound;

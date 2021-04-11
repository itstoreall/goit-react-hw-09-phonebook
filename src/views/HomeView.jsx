import s from './Views.module.scss';

const HomeView = () => (
  <section className={s.homeSection}>
    <h1>
      my Phonebook{' '}
      <span role='img' aria-label='Welcome to my phonebook'>
        👾
      </span>
    </h1>
  </section>
);

export default HomeView;

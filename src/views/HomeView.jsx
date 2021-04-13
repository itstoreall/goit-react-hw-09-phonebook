import s from './Views.module.scss';

export default function HomeView() {
  return (
    <section className={s.homeSection}>
      <h1>
        my Phonebook{' '}
        <span role='img' aria-label='Welcome to my phonebook'>
          👾
        </span>
      </h1>
    </section>
  );
}

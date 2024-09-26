import { createSignal, For } from 'solid-js';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isToday, parseISO } from 'date-fns';
import styles from './CalendarAdmin.module.css';

interface Event {
  date: string;
  title: string;
  description: string;
}

const CalendarAdmin = () => {
  const [currentDate, setCurrentDate] = createSignal(new Date());
  const [events, setEvents] = createSignal<Event[]>([
    { date: '2025-01-08', title: 'Outing Class', description: 'Kunjungan industri ke bandung' },
    { date: '2025-01-13', title: 'Ulangan Harian', description: 'Ada ulangan harian fisika' },
    { date: '2025-01-16', title: '!!!', description: "It's my birthday guisy xixizizi" },
    { date: '2025-01-27', title: 'Apel Pagi', description: 'Jangan lupa pake seragam + atribut lengkap' },
    { date: '2025-01-28', title: 'Senam bersama miss k', description: '(Tidak ada deskripsi)' },
  ]);

  const [selectedEvent, setSelectedEvent] = createSignal<Event | null>(null);

  const getDaysInMonth = () => {
    const start = startOfMonth(currentDate());
    const end = endOfMonth(currentDate());
    return eachDayOfInterval({ start, end });
  };

  const getEventForDate = (date: Date) => {
    return events().find(event => {
      const eventDate = parseISO(event.date);
      return eventDate.getDate() === date.getDate() &&
        eventDate.getMonth() === date.getMonth() &&
        eventDate.getFullYear() === date.getFullYear();
    });
  };

  const handleAddEvent = () => {
    const newEvent: Event = { date: '2025-01-01', title: 'New Event', description: 'Description here' };
    setEvents([...events(), newEvent]);
  };

  const handleEditEvent = (date: string, updatedEvent: Partial<Event>) => {
    setEvents(events().map(event => (event.date === date ? { ...event, ...updatedEvent } : event)));
  };

  // Fungsi untuk mengganti tahun
  const changeYear = (increment: number) => {
    setCurrentDate(prev => new Date(prev.getFullYear() + increment, prev.getMonth(), 1));
  };

  return (
    <div class={styles['penilaian-container']}>
      <button class={styles['add-event-button']} onClick={handleAddEvent}>Tambah Kegiatan</button>
      <div class={styles['calendar-content']}>
        <div class={styles['calendar-container']}>
          <div class={styles['boxCalender']}>
            <div class={styles['calendar-main']}>
              <div class={styles['calendar-header']}>
                <h2 class={styles['calendar-title']}>{format(currentDate(), 'MMMM yyyy')}</h2>
                <div class={styles['calendar-navigation']}>
                  <button onClick={() => setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() - 1, 1))}
                    class={styles['nav-button']}>
                    &lt;
                  </button>
                  <button onClick={() => setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1))}
                    class={styles['nav-button']}>
                    &gt;
                  </button>
                  {/* Tombol untuk mengganti tahun */}
                  <button onClick={() => changeYear(-1)} class={styles['nav-button']}>
                    &lt;&lt; Tahun Sebelumnya
                  </button>
                  <button onClick={() => changeYear(1)} class={styles['nav-button']}>
                    Tahun Selanjutnya &gt;&gt;
                  </button>
                </div>
              </div>
              <div class={styles['calendar-grid']}>
                <For each={['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']}>
                  {(day) => <div class={styles['calendar-day']}>{day}</div>}
                </For>

                <For each={getDaysInMonth()}>
                  {(day) => {
                    const event = getEventForDate(day);
                    return (
                      <div
                        class={`${styles['day-cell']} 
                          ${!isSameMonth(day, currentDate()) ? styles['inactive'] : ''} 
                          ${isToday(day) ? styles['active'] : ''} 
                          ${event ? styles['has-event'] : ''}`}
                        onClick={() => event && setSelectedEvent(event)}
                      >
                        <div>{format(day, 'd')}</div>

                        {event && (
                          <div class={styles['event-label']}>
                            {event.title}
                          </div>
                        )}
                      </div>
                    );
                  }}
                </For>
              </div>
            </div>
          </div>

          <div class={styles['event-sidebar']}>
            <h3 class={styles['event-sidebar-title']}>Daftar Kegiatan</h3>
            <div>
              <For each={events()}>
                {(event) => (
                  <div class={styles['event-card']}>
                    <div class={styles['event-date']}>
                      {format(parseISO(event.date), 'EEEE, dd MMMM yyyy')}
                    </div>
                    <div class={styles['event-title']}>{event.title}</div>
                    <div class={styles['event-description']}>{event.description}</div>
                  </div>
                )}
              </For>
            </div>
          </div>

          {selectedEvent() && (
            <div class={styles['edit-event-form']}>
              <h3>Edit Event</h3>
              <input
                type="text"
                value={selectedEvent()?.title}
                onInput={(e) => handleEditEvent(selectedEvent()?.date!, { title: e.currentTarget.value })}
              />
              <textarea
                value={selectedEvent()?.description}
                onInput={(e) => handleEditEvent(selectedEvent()?.date!, { description: e.currentTarget.value })}
              />
              <button onClick={() => setSelectedEvent(null)}>Selesai</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CalendarAdmin;

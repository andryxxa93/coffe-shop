<details>

  <summary>Шпаргалка для ревьюера</summary>

- [ ] В BurgerConstructor может быть только одна булка, которая используется сверху и снизу. Двух разных булок (тип bun) быть не может;
- [ ] Стоимость бургера подсчитывается динамически и корректно в зависимости от тех ингредиентов, которые находятся в конструкторе;
- [ ] При нажатии на кнопку «Оформить заказ» отправляется запрос к Api. В теле запроса передается массив из _id всех ингредиентов;
- [ ] При успешном запросе отображается модальное окно с компонентом `OrderDetails`, отображающим данные заказа;
- [ ] При скролле внутри компонента `BurgerIngredients` самый ближний к верхней левой границе заголовок контейнера становится активным;
- [ ] У ингредиентов отображается счётчик с количеством добавленных в бургер ингредиентов этого типа. При добавлении ингредиента в бургер значение счётчика увеличивается, при удалении — значение счётчика уменьшается.
- [ ] Правильно подключено расширение Redux Devtools, которое работает в режиме разработки
- [ ] Хранилище имеет начальное состояние из следующих элементов:
    - [ ] список всех полученных ингредиентов,
    - [ ] список всех ингредиентов в текущем конструкторе бургера,
    - [ ] объект текущего просматриваемого ингредиента,
    - [ ] объект созданного заказа.
- [ ]  Хранилище инициализируется с помощью функции `createStore()` и передается в качестве пропсов в компонент `Provider`
- [ ]  Внедрено хранилище через `Provider`
- [ ]  Для связывания React-компонента с Redux-хранилищем используется `connect` или `useSelector()` и `useDispatch()`
- [ ]  Используются расширители хранилища, корректно применена мидлвара `thunk` и используется `applyMiddleware` при подключении хранилища.
- [ ]  Описаны все экшены и редьюсеры, указанные в задании
- [ ]  Для каждого экшена, который связан с запросом к Api создан усилитель. Для таких экшенов описан тип `_REQUEST`, тип `_SUCCESS`, `_ERROR`
- [ ]  Экшен описывает лишь одно действие. Например, экшен `DECREASE_OR_INCREASE_ITEM` некорректно
- [ ]  Редьюсеры - чистые функции
- [ ]  Конструкция `case` внутри редьюсера выполняет только одно действие. Например, удаляет элемент из массива ингредиентов.
- [ ]  Каждый редьюсер решает только свою задачу - загрузка и хранение ингредиентов, работа конструктора, управление модальным окном ингредиента или оформлением заказа
- [ ]  Редьюсеры объединены в один с помощью combineReducers
- [ ] Если при выполнении запроса к Api в усилителе произошла ошибка, то содержимое хранилища соответствующего элемента приводится к начальному состоянию. Например, если пользователь оформил заказ, а при оформлении второго у него произошла ошибка — в модальном окне не должен отображаться старый номер заказа. Аналогично при работе со списком ингредиентов.
</details>
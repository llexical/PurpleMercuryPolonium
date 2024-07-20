import { createSignal } from "solid-js";
import "./app.css";

type CharacterSheetProps = {
  name: string,
  image: string,
  equipment: ModuleProps[],
  armaments: ModuleProps[]
}

type ModuleProps = {
  name: string
}

type AbilityProps = {
  name: string
}

function Module({name}: ModuleProps) {
  return (
    <article class="Module">
      {name}
    </article>
  )
}

function Ability({name}: AbilityProps) {
  return (
    <article class="Ability">
      {name}
      <button type="button">Activate</button>
    </article>
  )
}

function CharacterSheet({ name, equipment, armaments, image }: CharacterSheetProps) {
  return (
    <aside class="CharacterSheet">
      <h2>{name}</h2>
      <section class="Modules">
        <h3>Modules</h3>
        <img src={image} alt="" />
        <ul class="Modules-list Modules-list--equipment">
          {equipment.map(m => <li><Module {...m} /></li>)}
        </ul>
        <ul class="Modules-list Modules-list--armaments">
          {armaments.map(m => <li><Module {...m} /></li>)}
        </ul>
      </section>
      <section class="Status">
        <h3>Status</h3>
        <dl>
          <dt><label>Durability</label></dt>
          <dd><progress class="StatusBar-progress" value={10} max={100} /></dd>
          <dt><label>Energy</label></dt>
          <dd><progress class="StatusBar-progress" value={10} max={100} /></dd>
        </dl>
      </section>
      <section>
        <h3>Abilities</h3>
        <ul>
          <li>
            <Ability name="Heal" />
          </li>
          <li>
            <Ability name="Shoot" />
          </li>
          <li>
            <Ability name="Stab" />
          </li>
        </ul>
      </section>
    </aside>
  )
}

function CombatLog() {
  return (
    <section class="CombatLog">
      <p>Log...</p>
    </section>
  )
}

export default function App() {
  const [count, setCount] = createSignal(0);
  const equipment = [
    {name: "core"},
  ]
  const armaments = [
    {name: "gun"},
    {name: "knife"},
  ]
  return (
    <main>
      <CharacterSheet name="Player 1" image="/epyon.webp" equipment={equipment} armaments={armaments} />
      <CombatLog />
      <CharacterSheet name="Player 2" image="/epyon.webp" equipment={equipment} armaments={armaments} />
    </main>
  );
}

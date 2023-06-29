
export default function RsvpForm({person, handleInput} : {person: any, handleInput: any}) {
  return (
    <div className="font-montserrat font-extralight text-slate-600">
      <div className="mb-6">
        <label htmlFor="rsvp" className="block mb-2 text-sm">Attendance</label>
        <select
          value={person['rsvp'] ?? ''}
          name="rsvp"
          className="border text-sm rounded-lg outline-slate-400 block w-full p-2.5"
          onChange={handleInput('rsvp')}
          required
        >
          <option value=''>Please select an option</option>
          <option value='true'>I am able to attend</option>
          <option value='false'>I am unable to attend</option>
        </select>
      </div>

      <div className="mb-6">
        <label htmlFor="diet" className="block mb-2 text-sm">Dietary restrictions?</label>
        <input
          value={person['diet'] ?? ''}
          onChange={handleInput('diet')}
          type="text"
          name="diet"
          className="border text-sm rounded-lg outline-slate-400 block w-full p-2.5"
          placeholder="If not applicable, please leave blank"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="songRequest" className="block mb-2 text-sm">Requests for the dancefloor?</label>
        <input
          value={person['songRequest'] ?? ''}
          onChange={handleInput('songRequest')}
          type="text"
          name="songChoice"
          className="border text-sm rounded-lg outline-slate-400 block w-full p-2.5"
          placeholder="Song title - Artist"
        />
      </div>
    </div>
  )
}

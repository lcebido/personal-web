import React, { useEffect, useState } from "react";
import axios from "axios";

function CreateNote() {

  const [notes, setNotes] = useState([
    {
      title: "",
      content: "",
      _id: "",
    },
  ]);

  useEffect(() => {
    axios.get("http://localhost:3001/notes")
      .then(res => {
        const data = res.data;
        console.log("DATA: ", data);
        setNotes(data)
      })
      .catch(error => {
        console.log(error);
    })
  }, []);


  const [input, setInput] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  function handleClick(event) {
    event.preventDefault();
    const newNote = {
      title: input.title,
      content: input.content,
    };
    axios.post("http://localhost:3001/create", newNote);
  }

  return (
    <div id='createnote' className="container">
      <h1>CREATE NOTES PAGE</h1>
      <form>
        <div className="form-group">
          <input
            name="title"
            autoComplete="off"
            placeholder="note title"
            className="form-control"
            onChange={handleChange}
            value={input.title}
          ></input>
        </div>

        <div className="form-group">
          <textarea
            name="content"
            autoComplete="off"
            placeholder="note content"
            className="form-control"
            onChange={handleChange}
            value={input.content}
          ></textarea>
        </div>

        <button className="btn btn-lg btn-info" onClick={handleClick}>
          ADD NOTE
        </button>
      </form>
      <h1>NOTES HERE</h1>
      {notes.map((note) => (
        <div key={note._id}>
          <h1>{note.title}</h1>
          <p>{note.content}</p>
          <p>{note._id}</p>
        </div>
      ))}
       <p>
        Until recently, the prevailing view assumed lorem ipsum was born as a
        nonsense text. “It's not Latin, though it looks like it, and it actually
        says nothing,” Before & After magazine answered a curious reader, “Its
        ‘words’ loosely approximate the frequency with which letters occur in
        English, which is why at a glance it looks pretty real.” As Cicero would
        put it, “Um, not so fast.” The placeholder text, beginning with the line
        “Lorem ipsum dolor sit amet, consectetur adipiscing elit”, looks like
        Latin because in its youth, centuries ago, it was Latin. Richard
        McClintock, a Latin scholar from Hampden-Sydney College, is credited
        with discovering the source behind the ubiquitous filler text. In seeing
        a sample of lorem ipsum, his interest was piqued by consectetur—a
        genuine, albeit rare, Latin word. Consulting a Latin dictionary led
        McClintock to a passage from De Finibus Bonorum et Malorum (“On the
        Extremes of Good and Evil”), a first-century B.C. text from the Roman
        philosopher Cicero. In particular, the garbled words of lorem ipsum bear
        an unmistakable resemblance to sections 1.10.32–33 of Cicero's work,
        with the most notable passage excerpted below: “Neque porro quisquam
        est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
        sed quia non numquam eius modi tempora incidunt ut labore et dolore
        magnam aliquam quaerat voluptatem.” A 1914 English translation by Harris
        Rackham reads: “Nor is there anyone who loves or pursues or desires to
        obtain pain of itself, because it is pain, but occasionally
        circumstances occur in which toil and pain can procure him some great
        pleasure.” McClintock's eye for detail certainly helped narrow the
        whereabouts of lorem ipsum's origin, however, the “how and when” still
        remain something of a mystery, with competing theories and timelines. So
        how did the classical Latin become so incoherent? According to
        McClintock, a 15th century typesetter likely scrambled part of Cicero's
        De Finibus in order to provide placeholder text to mockup various fonts
        for a type specimen book. It's difficult to find examples of lorem ipsum
        in use before Letraset made it popular as a dummy text in the 1960s,
        although McClintock says he remembers coming across the lorem ipsum
        passage in a book of old metal type samples. So far he hasn't relocated
        where he once saw the passage, but the popularity of Cicero in the 15th
        century supports the theory that the filler text has been used for
        centuries. And anyways, as Cecil Adams reasoned, “[Do you really] think
        graphic arts supply houses were hiring classics scholars in the 1960s?”
        Perhaps. But it seems reasonable to imagine that there was a version in
        use far before the age of Letraset. McClintock wrote to Before & After
        to explain his discovery; “What I find remarkable is that this text has
        been the industry's standard dummy text ever since some printer in the
        1500s took a galley of type and scrambled it to make a type specimen
        book; it has survived not only four centuries of letter-by-letter
        resetting but even the leap into electronic typesetting, essentially
        unchanged except for an occasional 'ing' or 'y' thrown in. It's ironic
        that when the then-understood Latin was scrambled, it became as
        incomprehensible as Greek; the phrase 'it's Greek to me' and 'greeking'
        have common semantic roots!” (The editors published his letter in a
        correction headlined “Lorem Oopsum”). As an alternative theory, (and
        because Latin scholars do this sort of thing) someone tracked down a
        1914 Latin edition of De Finibus which challenges McClintock's 15th
        century claims and suggests that the dawn of lorem ipsum was as recent
        as the 20th century. The 1914 Loeb Classical Library Edition ran out of
        room on page 34 for the Latin phrase “dolorem ipsum” (sorrow in itself).
        Thus, the truncated phrase leaves one page dangling with “do-”, while
        another begins with the now ubiquitous “lorem ipsum”. Whether a medieval
        typesetter chose to garble a well-known (but non-Biblical—that would
        have been sacrilegious) text, or whether a quirk in the 1914 Loeb
        Edition inspired a graphic designer, it's admittedly an odd way for
        Cicero to sail into the 21st century. Don't bother typing “lorem ipsum”
        into Google translate. If you already tried, you may have gotten
        anything from "NATO" to "China", depending on how you capitalized the
        letters. The bizarre translation was fodder for conspiracy theories, but
        Google has since updated its “lorem ipsum” translation to, boringly
        enough, “lorem ipsum”. One brave soul did take a stab at translating the
        almost-not-quite-Latin. According to The Guardian, Jaspreet Singh
        Boparai undertook the challenge with the goal of making the text
        “precisely as incoherent in English as it is in Latin - and to make it
        incoherent in the same way”. As a result, “the Greek 'eu' in Latin
        became the French 'bien' [...] and the '-ing' ending in 'lorem ipsum'
        seemed best rendered by an '-iendum' in English.” Here is the classic
        lorem ipsum passage followed by Boparai's odd, yet mesmerizing version:
        “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit
        nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar
        aliquam. Ut aliquet tristique nisl vitae volutpat. Nulla aliquet
        porttitor venenatis. Donec a dui et dui fringilla consectetur id nec
        massa. Aliquam erat volutpat. Sed ut dui ut lacus dictum fermentum vel
        tincidunt neque. Sed sed lacinia lectus. Duis sit amet sodales felis.
        Duis nunc eros, mattis at dui ac, convallis semper risus. In adipiscing
        ultrices tellus, in suscipit massa vehicula eu.” Boparai's version:
        “Rrow itself, let it be sorrow; let him love it; let him pursue it,
        ishing for its acquisitiendum. Because he will ab hold, uniess but
        through concer, and also of those who resist. Now a pure snore
        disturbeded sum dust. He ejjnoyes, in order that somewon, also with a
        severe one, unless of life. May a cusstums offficer somewon nothing of a
        poison-filled. Until, from a twho, twho chaffinch may also pursue it,
        not even a lump. But as twho, as a tank; a proverb, yeast; or else they
        tinscribe nor. Yet yet dewlap bed. Twho may be, let him love fellows of
        a polecat. Now amour, the, twhose being, drunk, yet twhitch and, an
        enclosed valley’s always a laugh. In acquisitiendum the Furies are
        Earth; in (he takes up) a lump vehicles bien.” Nick Richardson described
        the translation “like extreme Mallarmé, or a Burroughsian cut-up, or a
        paragraph of Finnegans Wake. Bits of it have surprising power: the
        desperate insistence on loving and pursuing sorrow, for instance, that
        is cheated out of its justification – an incomplete object that has been
        either fished for, or wished for.” Don't bother typing “lorem ipsum”
        into Google translate. If you already tried, you may have gotten
        anything from "NATO" to "China", depending on how you capitalized the
        letters. The bizarre translation was fodder for conspiracy theories, but
        Google has since updated its “lorem ipsum” translation to, boringly
        enough, “lorem ipsum”. One brave soul did take a stab at translating the
        almost-not-quite-Latin. According to The Guardian, Jaspreet Singh
        Boparai undertook the challenge with the goal of making the text
        “precisely as incoherent in English as it is in Latin - and to make it
        incoherent in the same way”. As a result, “the Greek 'eu' in Latin
        became the French 'bien' [...] and the '-ing' ending in 'lorem ipsum'
        seemed best rendered by an '-iendum' in English.” Here is the classic
        lorem ipsum passage followed by Boparai's odd, yet mesmerizing version:
        “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit
        nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar
        aliquam. Ut aliquet tristique nisl vitae volutpat. Nulla aliquet
        porttitor venenatis. Donec a dui et dui fringilla consectetur id nec
        massa. Aliquam erat volutpat. Sed ut dui ut lacus dictum fermentum vel
        tincidunt neque. Sed sed lacinia lectus. Duis sit amet sodales felis.
        Duis nunc eros, mattis at dui ac, convallis semper risus. In adipiscing
        ultrices tellus, in suscipit massa vehicula eu.” Boparai's version:
        “Rrow itself, let it be sorrow; let him love it; let him pursue it,
        ishing for its acquisitiendum. Because he will ab hold, uniess but
        through concer, and also of those who resist. Now a pure snore
        disturbeded sum dust. He ejjnoyes, in order that somewon, also with a
        severe one, unless of life. May a cusstums offficer somewon nothing of a
        poison-filled. Until, from a twho, twho chaffinch may also pursue it,
        not even a lump. But as twho, as a tank; a proverb, yeast; or else they
        tinscribe nor. Yet yet dewlap bed. Twho may be, let him love fellows of
        a polecat. Now amour, the, twhose being, drunk, yet twhitch and, an
        enclosed valley’s always a laugh. In acquisitiendum the Furies are
        Earth; in (he takes up) a lump vehicles bien.” Nick Richardson described
        the translation “like extreme Mallarmé, or a Burroughsian cut-up, or a
        paragraph of Finnegans Wake. Bits of it have surprising power: the
        desperate insistence on loving and pursuing sorrow, for instance, that
        is cheated out of its justification – an incomplete object that has been
        either fished for, or wished for.” Don't bother typing “lorem ipsum”
        into Google translate. If you already tried, you may have gotten
        anything from "NATO" to "China", depending on how you capitalized the
        letters. The bizarre translation was fodder for conspiracy theories, but
        Google has since updated its “lorem ipsum” translation to, boringly
        enough, “lorem ipsum”. One brave soul did take a stab at translating the
        almost-not-quite-Latin. According to The Guardian, Jaspreet Singh
        Boparai undertook the challenge with the goal of making the text
        “precisely as incoherent in English as it is in Latin - and to make it
        incoherent in the same way”. As a result, “the Greek 'eu' in Latin
        became the French 'bien' [...] and the '-ing' ending in 'lorem ipsum'
        seemed best rendered by an '-iendum' in English.” Here is the classic
        lorem ipsum passage followed by Boparai's odd, yet mesmerizing version:
        “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit
        nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar
        aliquam. Ut aliquet tristique nisl vitae volutpat. Nulla aliquet
        porttitor venenatis. Donec a dui et dui fringilla consectetur id nec
        massa. Aliquam erat volutpat. Sed ut dui ut lacus dictum fermentum vel
        tincidunt neque. Sed sed lacinia lectus. Duis sit amet sodales felis.
        Duis nunc eros, mattis at dui ac, convallis semper risus. In adipiscing
        ultrices tellus, in suscipit massa vehicula eu.” Boparai's version:
        “Rrow itself, let it be sorrow; let him love it; let him pursue it,
        ishing for its acquisitiendum. Because he will ab hold, uniess but
        through concer, and also of those who resist. Now a pure snore
        disturbeded sum dust. He ejjnoyes, in order that somewon, also with a
        severe one, unless of life. May a cusstums offficer somewon nothing of a
        poison-filled. Until, from a twho, twho chaffinch may also pursue it,
        not even a lump. But as twho, as a tank; a proverb, yeast; or else they
        tinscribe nor. Yet yet dewlap bed. Twho may be, let him love fellows of
        a polecat. Now amour, the, twhose being, drunk, yet twhitch and, an
        enclosed valley’s always a laugh. In acquisitiendum the Furies are
        Earth; in (he takes up) a lump vehicles bien.” Nick Richardson described
        the translation “like extreme Mallarmé, or a Burroughsian cut-up, or a
        paragraph of Finnegans Wake. Bits of it have surprising power: the
        desperate insistence on loving and pursuing sorrow, for instance, that
        is cheated out of its justification – an incomplete object that has been
        either fished for, or wished for.”
      </p>
    </div>
  );
}

export default CreateNote;

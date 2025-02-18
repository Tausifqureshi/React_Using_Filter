import React from "react";
import { useProductContext } from "../components/Context API/ProductProvider";
function About() {
  const { key } = useProductContext(); // ✅ Ensure context is used properly

  return (
    <div>
      About
      <h1> CUTE: {key}</h1>
      <h1>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, atque
        excepturi, dolor aliquid aspernatur consequuntur quo veritatis tenetur
        libero doloremque quis laudantium, nesciunt magnam. Illum aut deleniti
        aspernatur blanditiis temporibus magnam quae accusamus! Iusto iste aut
        dolorem numquam beatae quaerat corrupti harum delectus, dicta aliquid,
        minus ut similique quibusdam quae eaque consequatur incidunt illo alias
        sit natus molestiae! Provident veritatis voluptates, harum quam eius
        consectetur accusantium fugit eaque sint tempora obcaecati doloribus
        fuga laborum libero culpa ut repellendus minima vel eos cupiditate
        repudiandae animi nihil pariatur. Amet error praesentium corrupti quidem
        cum alias hic corporis repellat non cupiditate vero aliquid iste sed
        nulla, incidunt, veritatis adipisci aspernatur quae. Consectetur modi
        delectus recusandae quo distinctio dolores error, dolorum maiores, ex
        laudantium possimus nemo, a nihil ipsa labore voluptatum sint nobis
        dolor? Blanditiis omnis explicabo, harum rerum quam laboriosam. Animi
        illum accusamus est accusantium numquam laboriosam voluptate, hic
        repellendus inventore iusto dignissimos quos nam velit quia eaque ea
        perferendis adipisci dolores quas minus laudantium debitis perspiciatis
        quo! Suscipit ratione unde, iure eveniet tempore nulla est excepturi
        numquam! Explicabo sint delectus atque eius ipsa neque obcaecati optio
        illo sed harum provident consequatur perferendis, labore facere ipsum
        laborum corporis placeat quia repudiandae quibusdam. Explicabo magnam
        maiores eius asperiores culpa est dignissimos magni beatae sequi fuga
        ipsum, dolores possimus optio consequatur! Deserunt veritatis sit saepe
        recusandae rerum sunt excepturi amet, rem labore doloremque omnis
        voluptate quas, fugiat esse odit, maiores voluptatum quaerat delectus!
        Qui illum a quos porro non. Quas, ab cum blanditiis amet voluptatem
        excepturi, dolores fuga magni minus veniam beatae labore eius,
        distinctio aliquam molestiae officia non illo rerum nisi harum molestias
        nam! Optio distinctio nemo natus repudiandae blanditiis cumque nulla
        officiis ad, dolore officia similique modi ea qui at maxime dolorem
        nostrum fuga? Suscipit possimus ullam incidunt veniam libero asperiores
        eos quisquam.
      </h1>
    </div>
  );
}

export default About;

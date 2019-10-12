const information=[
    {
        id: 1,
        title: "CREATIVE",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." +
      " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an " +
      "unknown printer took a galley of type and scrambled it to make a type specimen book. " +
      "It has survived not only five centuries, but also the leap into electronic typesetting," +
      " remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets " +
      "containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker " +
      "including versions of Lorem Ipsum.",
        position: "1 2 -3.5",
        rotation: "0 160 0"
    },
    {
        id: 2,
        title: "BRUTAL",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." +
            " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an " +
            "unknown printer took a galley of type and scrambled it to make a type specimen book. " +
            "It has survived not only five centuries, but also the leap into electronic typesetting," +
            " remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets " +
            "containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker " +
            "including versions of Lorem Ipsum.",
        position: "-2.5 2 -4.5",
        rotation: "0 210 0"
    }
];

function descriptionLoader(){
    return information;
}

export default descriptionLoader();
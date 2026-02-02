import {EXAMPLES} from "../data";
import TabButton from "./TabButton";
import {useState} from "react";
import Section from "./Section";
import Tabs from "./Tabs";

export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState();

    function handleSelect(selectedButton) {
        setSelectedTopic(selectedButton);
        console.log(selectedTopic); // Quirk: here you see the old value!!!
    }

    let tabContent = <p>Please select a topic.</p>;
    if (selectedTopic) {
        tabContent = <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
        </div>
    }

    return (
        <Section id="examples" title="Examples">
            <Tabs
                buttonsContainer="menu"
                buttons={
                <>
                {Object.keys(EXAMPLES).map(
                    (key, index) => (
                        <TabButton
                            key={index}
                            isSelected={selectedTopic === key}
                            onClick={() => handleSelect(key)}>
                            {EXAMPLES[key].title}
                        </TabButton>
                    ))}
                </>
            }>
                {tabContent}
            </Tabs>
        </Section>

    )
}
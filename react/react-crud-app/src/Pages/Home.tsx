import React from "react";

const Home: React.FC = () => {
    return (
        <>
            <h3>Summary</h3>
            <p>
                We’ll dive into each of these more throughout, but at a high level, here’s what guides our approach.
            </p>

            <ul>
                <li>
                    Components should be responsive and mobile-first
                </li>
                <li>Components should be built with a base class and extended via modifier classes</li>
                <li>Component states should obey a common z-index scale</li>
                <li> Whenever possible, prefer a HTML and CSS implementation over JavaScript</li>
                <li>Whenever possible, use utilities over custom styles</li>
                <li>Whenever possible, avoid enforcing strict HTML requirements (children selectors)</li>
            </ul>
            <h3>Responsive</h3>
            <p>
                Bootstrap’s responsive styles are built to be responsive, an approach that’s often referred to as mobile-first. We use this term in our docs and largely agree with it, but at times it can be too broad. While not every component must be entirely responsive in Bootstrap, this responsive approach is about reducing CSS overrides by pushing you to add styles as the viewport becomes larger.

            </p>
            <p>
                Across Bootstrap, you’ll see this most clearly in our media queries. In most cases, we use min-width queries that begin to apply at a specific breakpoint and carry up through the higher breakpoints. For example, a .d-none applies from min-width: 0 to infinity. On the other hand, a .d-md-none applies from the medium breakpoint and up.

            </p>
            <p>
                At times we’ll use max-width when a component’s inherent complexity requires it. At times, these overrides are functionally and mentally clearer to implement and support than rewriting core functionality from our components. We strive to limit this approach, but will use it from time to time.
            </p>
        </>
    )
}

export default Home;
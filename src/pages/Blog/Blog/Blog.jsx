import Container from "../../../components/Container";
import useAuth from "../../../hooks/useAuth";

const Blog = () => {

    const { userInfo } = useAuth()
    console.log(userInfo);

    return (
        <div>
            {/* Page Banner */}
            <div className="others-page-banner flex items-center">
                <Container>
                    <div className="w-full flex flex-col items-center text-white">
                        <h1 className="text-4xl font-semibold mb-2">Read our blogs about health</h1>
                        <p>Our specialist try write for the people. You will get important blog about health and disease case study.</p>
                    </div>
                </Container>
            </div>
            {/* Page Content */}
            <Container>
                <div className="py-20 text-justify space-y-5">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores odit dolores voluptas, ut harum aperiam animi veritatis minus, corporis obcaecati deleniti veniam adipisci recusandae facilis. Accusantium nulla velit officia reiciendis, odit a totam consectetur eveniet assumenda commodi! Quaerat dolorum nesciunt quas neque, repellendus nisi iusto cupiditate nam quos reiciendis numquam facilis, nobis reprehenderit quod eos. Obcaecati laboriosam ipsa minima commodi nihil repudiandae ea ut consequatur quas, optio molestiae voluptas nisi, eos hic sequi atque sunt officia deserunt quam impedit. Repudiandae, molestias in dolorem consectetur labore commodi, nihil omnis hic eos porro sit. Ut dolores natus voluptate delectus optio, quia fugit.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis fugiat voluptatem vitae pariatur corrupti dolorem, earum temporibus. Tempore possimus esse est? Saepe ipsa fuga ipsum voluptates cum natus nesciunt, eum maiores cupiditate earum recusandae rerum cumque minima omnis ea qui at magni quae! Quaerat pariatur assumenda consequatur veniam molestiae adipisci harum perspiciatis quisquam quo ea dolorum, eos soluta officiis minus, excepturi sunt. Tempore repellendus officiis neque temporibus itaque aspernatur odio inventore laboriosam alias dicta quidem aperiam, voluptates minima? Ex unde laudantium est repudiandae ullam quod cumque blanditiis fugiat tempora delectus saepe illo molestias, necessitatibus, accusamus perspiciatis quia velit consectetur facere quos ut! Consectetur corporis voluptas ab nostrum nam, architecto suscipit atque placeat temporibus ex, veritatis iusto officia repudiandae impedit est dignissimos expedita similique voluptatum consequatur? Voluptatibus, explicabo tenetur ipsum necessitatibus rem exercitationem delectus saepe debitis hic quasi illum et unde ratione quo, autem itaque blanditiis sequi adipisci dignissimos quam ut!</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, architecto quae quibusdam deleniti iure cupiditate. Atque, doloremque fugit. Repudiandae saepe vero commodi! Molestiae repellat quam velit nobis laudantium! Perferendis ipsa velit nemo cum accusantium, repudiandae facilis aperiam expedita harum fugiat eum quos quae quod necessitatibus fugit ut esse nulla iste.</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, architecto quae quibusdam deleniti iure cupiditate. Atque, doloremque fugit. Repudiandae saepe vero commodi! Molestiae repellat quam velit nobis laudantium! Perferendis ipsa velit nemo cum accusantium, repudiandae facilis aperiam expedita harum fugiat eum quos quae quod necessitatibus fugit ut esse nulla iste.</p>
                </div>
            </Container>
        </div>
    );
};

export default Blog;
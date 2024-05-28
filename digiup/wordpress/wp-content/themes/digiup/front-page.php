<!-- Pega o Header -->
<?php $current_page = 'home'; get_header(); ?>

<main>
    <!-- Importação modal colocar dentro do PHP-->
    <!-- get_template_part('blocks/modal'); -->
    <!-- Hero -->
    <section id="hero">
        <!-- Intro -->
        <div class="container mx-auto px-6 flex gap-4 flex-col md:flex-row pt-4 pb-4 md:pt-10 md:pb-14 ">
            <div class="md:w-6/12 flex items-center">
                <div class="flex flex-col ">
                    <h2 class="mb-4">
                        Your <span class="gradient-text">trusted partner</span> in digital healthcare.
                    </h2>
                    <p class="mb-4 md:mb-12">
                        <a href="#">
                            Empowering Your Health at Every Step</a>. Experience personalized medical care from the comfort of your home. Connect with <a href="#">certified doctors</a>, or manage prescriptions, and schedule appointments with ease. Ready to take control of your health? <a href="#">Get Started</a> or Book an Appointment today.
                    </p>
                    <div>
                        <a href="#appointment">                 
                            <button class="btn-hero mb-4 md:mb-10">
                                Book an appointment <span>
                                    <?php svg('arrow-hero"',12,18,"");?>
                                </span>
                            </button>
                        </a>
                    </div>

                    <p class="subtitle">Trusted by millions across the globe:</p>
                    <ul class="flex gap-2 md:gap-5">
                        <li><img src="assets/img/partners/amazon.svg"></li>
                        <li><img src="assets/img/partners/apple.svg"></li>
                        <li><img src="assets/img/partners/google.svg"></li>
                        <li><img src="assets/img/partners/notion.svg"></li>
                        <li><img src="assets/img/partners/spotify.svg"></li>
                        <li><img src="assets/img/partners/slack.svg"></li>

                    </ul>
                </div>
            </div>
            <div class="md:w-6/12 flex-1 hero-doctor">
                <figure>
                    <img src="./assets/img/hero/img_doctor.png" class=" ">
                </figure>
            </div>
        </div>
        <!--  Appointment -->
        <div class="container mx-auto px-6 py-2 md:py-10 relative" id="appointment">
            <div class="card">
                <div class="interna">
                    <h4 class=" text-digiup-blue-100 mb-6 md:mb-10">Easily book an appointment in 3 simple steps.</h4>

                    <form class="form-simple">
                        <div class="grid grid-cols-1 md:grid-cols-4 gap-6 ">
                            <label for="email-input" class="block">
                                <span class="text-label"><span class="icon">
                                        <?php svg('icon-email"',32,32,"");?>
                                    </span> Email Address</span>
                                <input id="email-input" type="email" class="form-input mt-1 block w-full" placeholder="Enter Your Email Address" aria-label="Input (email)" />
                            </label>

                            <label for="tel-input" class="block">
                                <span class="text-label"><span class="icon">
                                        <?php svg('icon-phone"',32,32,"");?>
                                    </span> Contact Number</span>
                                <input id="tel-input" type="tel" multiple class="form-input mt-1 block w-full" placeholder="Enter Your Contact Number" aria-label="Input (tel)" />
                            </label>

                            <label for="date-input" class="block">
                                <span class="text-label"><span class="icon">
                                        <?php svg('icon-calendar"',32,32,"");?>
                                    </span> Date of Appointment</span>
                                <input id="date-input" type="date" class="form-input mt-1 block w-full" aria-label="Input (date)" />
                            </label>

                            <div class="flex items-end justify-end">
                                <button class="btn">
                                    Book Now
                                    <span class="icon">
                                        <?php svg('icon-tick"',20,20,"");?>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <!-- Graphics Circles -->
            <div class="graphic">
                <figure>
                    <img src="./assets/img/graphics/dots-hero.png">
                </figure>
            </div>
        </div>
    </section>
    <!--  Top services -->
    <section id="services">
        <div class="container mx-auto px-6 py-2 md:py-10 relative flex justify-center">
            <div class="md:w-10/12">
                <h3 class="mb-4 text-center ">
                    Top <span class="gradient-text">services</span> we offer
                </h3>
                <div class="flex justify-center mb-10">
                    <p class="subtitle md:w-11/12   text-center">
                        In today’s fast-paced world, your health deserves the utmost attention and convenience. That’s why HealNet offers a suite of integrated services designed to cater to your healthcare needs digitally:
                    </p>
                </div>

                <!-- Cards Services -->
                <div class="area-cards relative">
                    <div class="line">
                        <div class="w-full md:w-7/12 card">
                            <div class="interna">
                                <figure class="mb-2">
                                    <img src="./assets/img/services/online_consultations.png">
                                </figure>
                                <h5>Online Consultations</h5>
                                <p class=" text-sm font-semibold text-digiup-gray-400">
                                    Consult with top doctors across various specialties via video or chat communication. It’s totally secure, private, and convenient. Choose the best time for an in-person visit with our easy-to-use scheduling system, or proceed with our online consultation.
                                </p>
                            </div>
                        </div>
                        <div class="w-full md:w-5/12 card">
                            <div class="interna">
                                <figure class="mb-2">
                                    <img src="./assets/img/services/booking_appointments.png">
                                </figure>
                                <h5>Booking Appointments</h5>
                                <p class=" text-sm font-semibold text-digiup-gray-400">
                                    Choose the best time for an in-person visit with our easy-to-use scheduling system, or proceed with our online consultation features.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="line">
                        <div class="w-full md:w-1/3 card">
                            <div class="interna">
                                <figure class="mb-2">
                                    <img src="./assets/img/services/prescriptions.png">
                                </figure>
                                <h5>Prescriptions</h5>
                                <p class=" text-sm font-semibold text-digiup-gray-400">
                                    Receive and renew prescriptions digitally after your consultation with our specialists .
                                </p>
                            </div>
                        </div>
                        <div class="w-full md:w-1/3 card">
                            <div class="interna">
                                <figure class="mb-2">
                                    <img src="./assets/img/services/medical_notes.png">
                                </figure>
                                <h5>Medical Notes</h5>
                                <p class=" text-sm font-semibold text-digiup-gray-400">
                                    Obtain necessary medical notes for work or school with only a few clicks of hassle.
                                </p>
                            </div>
                        </div>
                        <div class="w-full md:w-1/3 card">
                            <div class="interna">
                                <figure class="mb-2">
                                    <img src="./assets/img/services/medicine_refills.png">
                                </figure>
                                <h5>Medicine Refills</h5>
                                <p class=" text-sm font-semibold text-digiup-gray-400">
                                    Skip the pharmacy queues and save time + energy by ordering medicine refills online.
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Graphics Waves -->
                    <div class="graphic1">
                        <figure>
                            <img src="./assets/img/graphics/wave1.png">
                        </figure>
                    </div>
                    <div class="graphic2">
                        <figure>
                            <img src="./assets/img/graphics/wave2.png">
                        </figure>
                    </div>
                </div>
            </div>

        </div>
    </section>
    <!--  Story -->
    <section id="story">
        <div class="container mx-auto px-6 py-2 md:py-10">
            <!-- Cards Services -->
            <div class="area-cards relative">
                <div class="card">
                    <div class="interna">
                        <h4 class=" mb-11 text-center ">
                            <span class="gradient-text"> HealNet’s Story:</span> Get to know us
                        </h4>
                        <div class="flex flex-col md:flex-row gap-4 md:gap-14">
                            <div>
                                <figure class="w-full md:w-[448px]">
                                    <img src="./assets/img/story/figure1.png">
                                </figure>
                            </div>
                            <div>
                                <p class="font-semibold text-digiup-gray-400 p-0 m-0">
                                    HealNet is more than just an online medical service; it’s a movement towards accessible, efficient, and compassionate healthcare for all. Founded by a team of visionary doctors, healthcare professionals, and technology experts, we are driven by the mission to deliver exceptional medical care directly to you, no matter where you are. Our platform is built on the pillars of trust, innovation, and patient-centricity, ensuring that every interaction is personalized and every treatment plan is tailored to your unique needs. With a network of licensed practitioners from diverse medical fields, we guarantee comprehensive care that’s just a click away.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--  Platform -->
    <section id="platform">
        <div class="container mx-auto px-6 py-2">
            <div class="flex  justify-center">
                <div class="md:w-10/12">
                    <h3 class="mb-4 text-center ">
                        How <span class="gradient-text">our platform</span> works
                    </h3>
                    <div class="flex justify-center mb-10">
                        <p class="subtitle md:w-10/12   text-center">
                            Navigating your healthcare journey with HealNet is seamless. Just follow these steps mentioned below to proceed with your selected services. You can also see our FAQ section for more guidance:
                        </p>
                    </div>
                </div>
            </div>
            <div class="flex  justify-center ">
                <div class="md:w-10/12">
                    <div class="flex md:gap-16 flex-col md:flex-row">
                        <div class="md:w-6/12">
                            <div class="flex">
                                <div class="pointer">
                                    <span>1</span>
                                </div>
                                <div class="pt-1 pb-8">
                                    <h4>Create Your Profile</h4>
                                    <p class="text-sm text-digiup-gray-400 md:w-[334px] m-0">Sign up and fill in your medical history securely. Setting up your profile this way would ensure that you stay up-to-date with your medical processes.</p>
                                </div>
                            </div>
                            <div class="flex">
                                <div class="pointer">
                                    <span>2</span>
                                </div>
                                <div class="pt-1 pb-8">
                                    <h4>Choose Your Servicee</h4>
                                    <p class="text-sm text-digiup-gray-400 md:w-[334px] m-0">Select from our range of services and book a consultation. Booking a consultation with HealNet is fairly simple and straight-forward.</p>
                                </div>
                            </div>
                            <div class="flex">
                                <div class="pointer-last">
                                    <span>3</span>
                                </div>
                                <div class="pt-1 pb-8">
                                    <h4>Meet Your Doctor</h4>
                                    <p class="text-sm text-digiup-gray-400 md:w-[334px] m-0">Have a virtual consultation with one of our certified specialists, or go for a physical visit to the doctor in case you opted for a physical check-up.</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <figure>
                                <img src="./assets/img/platform/doctor_full.png" class=" ">
                            </figure>
                        </div>
                    </div>
                </div>
            </div>


        </div>

    </section>
    <!--  Testimonials -->
    <section id="testimonials">
        <div class="container mx-auto px-6 py-2 md:py-10 relative flex flex-col justify-center">

            <h3 class="mb-4 text-center ">

                <span class="gradient-text"> Patient Testimonials:</span><br /> Hear from Those We’ve Cared For
            </h3>
            <div class="flex justify-center mb-10">
                <p class="subtitle md:w-11/12   text-center">
                    Discover the difference we make through the voices of those we’ve served:
                </p>
            </div>
            <!-- Cards Testimonials -->
            <div class="area-cards relative">
                <div class="line">
                    <div class="w-full md:w-6/12 card">
                        <div class="interna ">
                            <figure>
                                <img src="./assets/img/testimonials/linda.png">
                            </figure>
                            <div>
                                <p class=" font-medium m-0 text-digiup-gray-400">“After my knee surgery, the convenience of online consultations made my recovery smoother than I could have imagined.”</p>
                                <span class="font-bold text-digiup-gray-600">- Linda A.</span>
                            </div>
                        </div>
                    </div>
                    <div class="w-full md:w-6/12 card">
                        <div class="interna ">
                            <figure>
                                <img src="./assets/img/testimonials/henry.png">
                            </figure>
                            <div>
                                <p class=" font-medium m-0 text-digiup-gray-400">“Managing chronic conditions like diabetes requires a lot of vigilance, but the medicine refill system has simplified my life.”</p>
                                <span class="font-bold text-digiup-gray-600">- Henry B.</span>
                            </div>
                        </div>
                    </div>


                </div>

                <!--  Big Numbers -->
                <div class="grid grid-cols-2 md:grid-cols-4 md:p-10">
                    <div class="big-number">
                        <div class="title">10,000+</div>
                        <div class="subtitle">Successful Consultations</div>
                    </div>
                    <div class="big-number">
                        <div class="title">2,500+</div>
                        <div class="subtitle">Healthcare Professionals</div>
                    </div>
                    <div class="big-number">
                        <div class="title">98%</div>
                        <div class="subtitle">Patient Satisfaction Rate</div>
                    </div>
                    <div class="big-number">
                        <div class="title">200+</div>
                        <div class="subtitle">Top Specialists</div>
                    </div>
                </div>


                <div class="line">
                    <div class="w-full md:w-6/12 card">
                        <div class="interna ">
                            <figure>
                                <img src="./assets/img/testimonials/joshua.png">
                            </figure>
                            <div>
                                <p class=" font-medium m-0 text-digiup-gray-400">“The prescription refill system is a game-changer for managing my diabetes. It’s really efficient and completely hassle-free.”</p>
                                <span class="font-bold text-digiup-gray-600">- Joshua T.</span>
                            </div>
                        </div>
                    </div>
                    <div class="w-full md:w-6/12 card">
                        <div class="interna ">
                            <figure>
                                <img src="./assets/img/testimonials/samantha.png">
                            </figure>
                            <div>
                                <p class=" font-medium m-0 text-digiup-gray-400">“Finding a doctor who really understands all of my health needs has never been easier. This platform has changed my life.”</p>
                                <span class="font-bold text-digiup-gray-600">- Samantha K.</span>
                            </div>
                        </div>
                    </div>


                </div>

                <!-- Graphics Waves -->
                <div class="graphic1">
                    <figure>
                        <img src="./assets/img/graphics/global.png">
                    </figure>
                </div>
                <div class="graphic2">
                    <figure>
                        <img src="./assets/img/graphics/global.png">
                    </figure>
                </div>
            </div>


        </div>
    </section>

    <!--  Masters -->
    <section id="masters">
        <div class="container mx-auto px-6 py-2 md:py-10 relative flex flex-col justify-center">

            <h3 class="mb-4 text-center ">

                <span class="gradient-text"> Patient Testimonials:</span><br /> Hear from Those We’ve Cared For
            </h3>
            <div class="flex justify-center mb-10">
                <p class="subtitle md:w-11/12   text-center">
                    Discover the difference we make through the voices of those we’ve served:
                </p>
            </div>
            <!-- Cards Testimonials -->
            <div class="area-cards relative">
                <div class="cols">
                    <div class="w-full  card relative">
                        <div class="interna ">
                            <div>
                                <div class="text-2xl font-extrabold">Dr. Sarah Johnson (Cardiologist)</div>
                                <p class=" font-semibold">Heart health is Dr. Wong’s passion, and her approach to cardiology integrates cutting-edge technology with compassionate care. She’s a respected voice in the prevention of heart disease and a trusted partner to her patients on their journey to wellness.</p>
                                <div>
                                    <a href="#appointment">                 
                                        <button class="btn">
                                            <span class="gradient-text"> Book appointment</span>
                                            <span class="icon">
                                                <?php svg('icon-phone"',28,28,"fill-digiup-blue-300");?>
                                            </span>
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="doctor-big ">
                            <figure>
                                <img src="./assets/img/masters/doctorA.png">
                            </figure>
                        </div>
                    </div>

                    <div class="w-full  card relative">
                        <div class="interna ">
                            <div>
                                <div class="text-2xl font-extrabold">Dr. Mark Lee (Dermatologist )</div>
                                <p class=" font-semibold">Dr. Lee is a visionary in dermatology, advancing treatments for skin health with a gentle, holistic approach. His dedication to clinical excellence and patient education has made him a leader in dermatological care. He’s known for his precision and commitment to patient-centered care.</p>
                                <div>
                                    <a href="#appointment">                 
                                        <button class="btn">
                                            <span class="gradient-text"> Book appointment</span>
                                            <span class="icon">
                                                <?php svg('icon-phone"',28,28,"fill-digiup-blue-300");?>
                                            </span>
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="doctor-big ">
                            <figure>
                                <img src="./assets/img/masters/doctorB.png">
                            </figure>
                        </div>
                    </div>
                    <!-- Graphics Waves -->
                    <div class="graphic1">
                        <figure>
                            <img src="./assets/img/graphics/dots-master.png">
                        </figure>
                    </div>
                    <div class="graphic2">
                        <figure>
                            <img src="./assets/img/graphics/dots-master.png">
                        </figure>
                    </div>

                </div>

            </div>


        </div>
    </section>

    <!--  Help Desk -->
    <section id="helpdesk">
        <div class="container mx-auto px-6 py-2 md:py-10 relative flex flex-col justify-center">

            <h3 class="mb-4 text-center ">
                Reach our <span class="gradient-text">Help Desk</span> for support
            </h3>
            <div class="flex justify-center mb-4 md:mb-10">
                <p class="subtitle md:w-11/12   text-center">
                    Discover the difference we make through the voices of those we’ve served:
                </p>
            </div>
            <form class="form-simple">
                <div class="flex justify-center gap-6 flex-col md:flex-row ">

                    <label for="name-input" class="block">
                        <span class="text-label">
                            <?php svg('icon-user"',32,32,"");?>
                        </span>
                        <input id="name-input" type="text" multiple class="form-input mt-1 block w-full" placeholder="Enter Your First Name" aria-label="Input (tel)" />
                    </label>
                    <label for="email-input" class="block">
                        <span class="text-label">
                            <?php svg('icon-email"',32,32,"");?>
                        </span>
                        <input id="email-input" type="email" class="form-input mt-1 block w-full" placeholder="Enter Your Email Address" aria-label="Input (email)" />
                    </label>

                    <div class="flex items-end justify-end">
                        <button class="btn">
                            Contact us
                            <span class="icon">
                                <?php svg('arrow"',20,20,"fill-white");?>
                            </span>
                        </button>
                    </div>
                </div>
            </form>

        </div>
    </section>


</main>

<!-- Pega o Footer -->
<?php get_footer(); ?>
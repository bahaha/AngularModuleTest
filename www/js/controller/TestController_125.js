module.exports= function($scope, $state, TestService){
		console.log('enter controller_125')
		$scope.test = TestService.getTest()
	}
